import { Component,OnInit,Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, shareReplay } from 'rxjs/operators';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})

export class FullComponent implements OnInit{
  search:boolean = false;
  isAuthenticated:boolean = false;
  userFullName:string = 'Account';
  cartIcon = faCartShopping;
  userIcon = faUserCircle;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    /**
     * BreakpointObserver is used to check for @media status
     * Router is used to navigate to URLs
     * OktaAuthStateService is used to retrieved the Authentication State. is signed in or is not signed in.
     * OktaAuth is use to perform sign out action and and retrieve user properties.
     * Injecting OKTA_AUTH is nessesary.
     * @param breakpointObserver 
     * @param router 
     * @param oktaAuthService 
     * @param oktaAuth 
     */
  constructor(
    // private oktaAuthService:OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth:OktaAuth,
    private breakpointObserver: BreakpointObserver,
    private router:Router
    ) { }
  ngOnInit(): void {
    //Subscribe to authentication state changes.
    // this.oktaAuthService.authState$.subscribe(
    //   result => {
    //     this.isAuthenticated = result.isAuthenticated!;
    //     this.getUserDetails();
    //   }
    // )
  }
  getUserDetails() {
  //   if(this.isAuthenticated)
  //     //Fetch the logged in get user detail.
  //     //user fullname is exposed as a property.
  //     this.oktaAuth.getUser().then(
  //       result => {
  //         this.userFullName = result.name as string;
  //       }
  //     )
  }
  // logout(){
  //   //terminate session with okta.
  //   //remove current tokens
  //   this.oktaAuth.signOut();
  // }
  doSearch(keyword:string){
    this.router.navigateByUrl(`/shop/search/${keyword}`)
  }
  routerActive: string = "activelink";
  sidebarMenu: sidebarMenu[] = [
    {
      link: "/home",
      icon: "home",
      menu: "Dashboard",
    },
    {
      link:"/shop",
      icon:"home",
      menu:"SHOP HOME"
    },
    {
      link:"/manage",
      icon:"layers",
      menu:"MANAGE PRODUCTS"
    }
  ]
  goToSignup(){
    this.router.navigate(["/signup"])
  }
  goToCartPage(){
    this.router.navigate(["/cart"])
  }
}


