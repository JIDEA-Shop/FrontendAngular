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
import { ShophomeComponent } from './shophome/shophome.component';
import { ProductComponent } from './shophome/product/product.component';
import { CardComponent } from './shophome/components/card/card.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartPageComponent } from './cart-page/cart-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    ShophomeComponent,
    ProductComponent,
    CardComponent,
    SignupPageComponent,
    SignupFormComponent,
    SigninFormComponent,
    SigninPageComponent,
    CartPageComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    DashboardModule,
    ComponentsModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
