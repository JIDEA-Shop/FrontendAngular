import { NgModule,Injector } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import ShophomeComponent from './shophome/shophome.component';

import { SignupPageComponent } from './signup-page/signup-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CardComponent } from './shophome/components/card/card.component';

import { OrderItemsDetailsComponent } from './order-items-details/order-items-details.component';
import { OrderReportPageComponent } from './order-report-page/order-report-page.component';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular'
import { CardDetailComponent } from './shophome/components/card-detail/card-detail.component';
import { ManagementComponent } from './management/management.component';
import { LoginOktaComponent } from './components/login-okta/login-okta.component';
import { OktaAuth } from '@okta/okta-auth-js';

function sendToLoggin(oktaAuth:OktaAuth,injector: Injector){
  const router = injector.get(Router);
  router.navigate(['/login']);
}


const routes: Routes = [
  {
    path:"",
    component:FullComponent,
    children: [
      { path:"", redirectTo:"/shop", pathMatch:"full"},
      {
        path:"shop",
        component:ShophomeComponent,
        children: [
          { path: "category/:id", component:CardComponent},
          { path: "search/:keyword",component:CardComponent},
          { path: "", component:CardComponent},
        ]
      },
      { path:"manage",component:ManagementComponent, canActivate: [OktaAuthGuard],
          data: {onAuthRequired: sendToLoggin},
    },
      { path:"product-detail/:id",component:CardDetailComponent},
      { path:"home", component:DashboardComponent, canActivate: [OktaAuthGuard],
      data: {onAuthRequired: sendToLoggin} },
    ]
  },
  {path:"login/callback",component: OktaCallbackComponent},
  {path:"login",component: LoginOktaComponent},
  {path:"signup", component:SignupPageComponent},
  {path:"signin", component:SigninPageComponent},
  {path:"orderDetails", component:OrderItemsDetailsComponent},
  {path:"report", component:OrderReportPageComponent},
  {path:"cart", component:CartPageComponent},
  {path:"", redirectTo:"", pathMatch:"full"},
  {path:"**", redirectTo: "",pathMatch: "full"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
