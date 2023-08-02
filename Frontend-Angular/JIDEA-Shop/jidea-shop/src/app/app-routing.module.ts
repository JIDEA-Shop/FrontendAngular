import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { FormsComponent } from './components/forms/forms.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProgressSnipperComponent } from './components/progress-snipper/progress-snipper.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { ProductComponent } from './dashboard/dashboard-components/product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import { ShophomeComponent } from './shophome/shophome.component';

import { SignupPageComponent } from './signup-page/signup-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CardComponent } from './shophome/components/card/card.component';


const routes: Routes = [
  {
    path:"",
    component:FullComponent,
    children: [
      {path:"", redirectTo:"/shop", pathMatch:"full"},
      {path:"signup", component:SignupPageComponent},
      {path:"signin", component:SigninPageComponent},
      {path:"cart", component:CartPageComponent},

      {
        path:"shop",
        component:ShophomeComponent,
        children: [
          { path: "category/:id", component:CardComponent},
          { path: "search/:keyword",component:CardComponent},
          { path: "", component:CardComponent},
        ]
      },

      {path:"home", component:DashboardComponent},
    ]
  },

  {path:"", redirectTo:"", pathMatch:"full"},
  {path:"**", redirectTo: "",pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
