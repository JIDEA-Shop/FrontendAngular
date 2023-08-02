import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, shareReplay } from 'rxjs/operators';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

interface navbarProfile {
  link: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {
 
  cartIcon = faCartShopping;
  userIcon = faUserCircle;
  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [
    {
      link:"/shop",
      icon:"home",
      menu:"SHOP HOME"
    },
    {
      link: "/home",
      icon: "home",
      menu: "Dashboard",
    },
  ]

  navbarProfile: navbarProfile[] =[
    {
      link:"/signup"
    }
  ]

  goToSignup(){
    this.router.navigate(["/signup"])
  }

  goToCartPage(){
    this.router.navigate(["/cart"])
  }


}
