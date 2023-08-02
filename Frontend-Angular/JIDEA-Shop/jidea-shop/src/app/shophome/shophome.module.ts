import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoFlexyModule } from '../demo-flexy-module'
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CardComponent } from './components/card/card.component';
import { ProductComponent } from './components/recommended-for-you/recommend.component';
import { PromotionBannerComponent } from './components/promotion-banner/promotion-banner.component';
import { ShophomeComponent } from './shophome.component';
import { AppRoutingModule } from '../app-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';




@NgModule({
  declarations: [
    ShophomeComponent,
    CardComponent,
    ProductComponent,
    PromotionBannerComponent,
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DemoFlexyModule,
    FormsModule,
    NgApexchartsModule,
    FeatherModule.pick(allIcons),
  ],
  exports: [
    ShophomeComponent,
    CardComponent,
    ProductComponent,
    PromotionBannerComponent,
    CategoriesComponent
  ]
})
export class ShophomeModule { }
