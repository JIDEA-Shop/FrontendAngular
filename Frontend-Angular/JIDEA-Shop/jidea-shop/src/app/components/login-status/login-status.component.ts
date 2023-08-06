import { Component,Inject,OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {OktaAuthStateService,OKTA_AUTH } from '@okta/okta-angular';
import {OktaAuth} from '@okta/okta-auth-js';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.scss']
})
export class LoginStatusComponent implements OnInit {
  public isAuthenticated:boolean = false;
  public userFullName:string = "Account";
  public userImage:string = "";
  public cartIcon = faCartShopping;
  public userIcon = faUserCircle;
  constructor(private oktaAuthService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth:OktaAuth,private router:Router
    ){}
  ngOnInit(): void {
    
    this.oktaAuthService.authState$.subscribe(
      (result) => {this.isAuthenticated = result.isAuthenticated!
      this.getUserDetails();
      }
    )
  }
  getUserDetails() {
    if(this.isAuthenticated)
    {
    this.oktaAuth.getUser().then(
      (res) => {
        console.log(res);
        this.userFullName = res.name as string;
      })
    }
  }
  logout(){
    this.oktaAuth.signOut();
  }
  login()
  {
    this.router.navigateByUrl('/login');
  }
  goToCart(){
    this.router.navigateByUrl('/cart');
  }
  goToProfile()
  {
    this.router.navigate(['/user-profile']);
  }
}
