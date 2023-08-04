import { Component, Inject,OnInit } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { OktaSignIn } from '@okta/okta-signin-widget';
import oktaConfig from '../config/okta-config';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit{
  oktaSignin:any;
  constructor(@Inject(OKTA_AUTH) private oktaAuth:OktaAuth){
    this.oktaSignin = new OktaSignIn(
      {
        logo:"assets/images/logo-dark.svg",
        baseUrl: oktaConfig.oidc.issuer.split('/oauth2')[0],
        clientId: oktaConfig.oidc.clientId,
        redirectUri: oktaConfig.oidc.redirect_uri,
        authParams: {
          pkce: true,
          issuer: oktaConfig.oidc.issuer,
          scopes: oktaConfig.oidc.scopes
        }
      }
    )
  }
  ngOnInit(): void {
    this.oktaSignin.remove();
    this.oktaSignin.renderEL(
      {el: '#okta-sign-in-widget'},  //# symbol is important here
      (response:any) =>{
        if(response.status == 'SUCCESS')
          this.oktaAuth.signInWithRedirect();
      },
      (error:any)=>{
        throw error;
      }
    )
  }
}
