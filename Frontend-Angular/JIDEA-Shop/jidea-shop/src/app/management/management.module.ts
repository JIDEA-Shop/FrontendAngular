import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FeatherModule } from "angular-feather";
import { allIcons } from "angular-feather/icons";
import { NgApexchartsModule } from "ng-apexcharts";
import { DemoFlexyModule } from "../demo-flexy-module";
import { AppRoutingModule } from "../app-routing.module";
import { CommonModule } from "@angular/common";
import { ManagementComponent } from "./management.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { NgModule } from '@angular/core'

@NgModule({
    declarations: [
        ManagementComponent,
        UserProfileComponent
    ],
    imports: [
      CommonModule,
      AppRoutingModule,
      ReactiveFormsModule,
      DemoFlexyModule,
      FormsModule,
      NgApexchartsModule,
      FeatherModule.pick(allIcons),
    ],
    exports: [
      ManagementComponent,
      UserProfileComponent
    ]
  })
  export class ManagementModule { }