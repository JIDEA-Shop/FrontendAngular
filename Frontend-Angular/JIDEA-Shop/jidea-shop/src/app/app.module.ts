import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullComponent } from './layouts/full/full.component';
import { DemoFlexyModule } from './demo-flexy-module'
// Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MatTableModule } from '@angular/material/table';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ShophomeModule } from './shophome/shophome.module';
import { OrderItemsDetailsComponent } from './order-items-details/order-items-details.component';
import { OrderReportPageComponent } from './order-report-page/order-report-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ManagementComponent } from './management/management.component';
import { MarketingComponent } from './marketing/marketing.component';
import {ImplMarketingService} from "./services/impl-marketing.service";
import {MarketinghttpService} from "./services/marketinghttp.service";
import {ShoppinghttpService} from "./services/shoppinghttp.service";
import {ImplShoppingService} from "./services/impl-shopping.service";
import {
  OktaAuthModule,
  OKTA_CONFIG
} from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import myAppConfig from './config/my-app-config';
import { ManagementModule } from './management/management.module';
const oktaConfig = myAppConfig.oidc;
const oktaAuth = new OktaAuth(oktaConfig);



@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    SignupPageComponent,
    SignupFormComponent,
    SigninFormComponent,
    SigninPageComponent,
    CartPageComponent,
      MarketingComponent,
    OrderItemsDetailsComponent,
    OrderReportPageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    DashboardModule,
    ShophomeModule,
    ComponentsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatTableModule,
    NgbModule,
    OktaAuthModule,
    ManagementModule

  ],

  providers: [
    ProductService,
    { provide: OKTA_CONFIG, useValue: { oktaAuth }},
    ImplMarketingService,
    MarketinghttpService,
    ShoppinghttpService,
    ImplShoppingService,


  ],
  bootstrap: [AppComponent ,MarketingComponent]
})
export class AppModule { }
