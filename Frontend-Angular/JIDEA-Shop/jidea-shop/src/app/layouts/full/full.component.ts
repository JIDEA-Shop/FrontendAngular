import { Component,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/common/classes/category';

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

  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    categories:Category[]=[];
  constructor(private breakpointObserver: BreakpointObserver,private productService:ProductService) { }
  ngOnInit(): void {
    this.getCategories();
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
  ]
  getCategories() {
    this.productService.getCategories().subscribe
    (
      data => {
        console.log(data._embedded.productCategory);
        this.categories = data._embedded.productCategory;
      }
    )
  }
}


