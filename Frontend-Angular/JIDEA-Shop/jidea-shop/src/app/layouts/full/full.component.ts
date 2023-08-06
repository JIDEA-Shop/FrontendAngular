import { Component,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, shareReplay } from 'rxjs/operators';

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
  public search:boolean = false;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router:Router) { }
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  ngOnInit(): void {
  }
  
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

}


