import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import {RecruitmentComponent} from "./recruitment/recruitment.component";
import {CompanyComponent} from "./company/company.component";


@NgModule({
  declarations: [
    CompanyComponent,
    RecruitmentComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule
  ]
})
export class GuestModule { }
