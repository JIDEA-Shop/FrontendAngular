import { Component, Inject,OnInit } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import OktaSignIn from '@okta/okta-signin-widget'
import myAppConfig from 'src/app/config/my-app-config';

@Component({
  selector: 'app-login-okta',
  templateUrl: './login-okta.component.html',
  styleUrls: ['./login-okta.component.scss']
})
export class LoginOktaComponent implements OnInit{
  oktaSignin:any;
  constructor(@Inject(OKTA_AUTH) private oktaAuth:OktaAuth)
  {
    this.oktaSignin = new OktaSignIn({
      logo: "favicon.ico",
      baseUrl: myAppConfig.oidc.issuer.split('/oauth2')[0],
      clientId: myAppConfig.oidc.clientId,
      redirectUri: myAppConfig.oidc.redirectUri,
      authParams:{
        pkce: true,
        issuer: myAppConfig.oidc.issuer,
        scopes: myAppConfig.oidc.scopes
      },
      idps:[
        { type: 'google', id: '0oaaox3qlcCYIr3Zu5d7' },
      ],
      idpDisplay: "PRIMARY",
      i18n: {
        en: {
          'password.forgot.email.or.username.placeholder': 'Email',
          'password.forgot.email.or.username.tooltip': 'Email',
          'errors.E0000095': 'Unable to reset password.  Did you put in a valid email?'
        }
      },
      features: {
        registration: true,
      }
    });
  }
  ngOnInit(): void {
    this.oktaSignin.remove();

    this.oktaSignin.renderEl({
      el: '#okta-sign-in-widget'},
      (response:any) => {
        if(response.status ==='SUCCESS')
        {
          this.oktaAuth.signInWithRedirect();
        }
      },
      (error:any) => {
        throw error;
      }
    )
  }
}
