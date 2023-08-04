import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullComponent } from './layouts/full/full.component';
import { DemoFlexyModule } from './demo-flexy-module'

// Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';

import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MatTableModule } from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { ShophomeModule } from './shophome/shophome.module';
import { OrderItemsDetailsComponent } from './order-items-details/order-items-details.component';
import { OrderReportPageComponent } from './order-report-page/order-report-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManagementComponent } from './management/management.component';
import { AuthModule } from '@auth0/auth0-angular';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    SignupPageComponent,
    SignupFormComponent,
    SigninFormComponent,
    SigninPageComponent,
    CartPageComponent,
    OrderItemsDetailsComponent,
    OrderReportPageComponent,
    ManagementComponent,
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
    AuthModule.forRoot({
      domain: 'dev-nfojln4l7hgsc4kb.us.auth0.com',
      clientId: 'DUBcoLACuWE2EJmaMQuJY1osCZeLkock',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200/login/callback',
        scopes: ['openid','profile','email'],
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
