import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import {DashboardMainComponent} from "./dashboard-main/dashboard-main.component";
import {DashboardPostedJobComponent} from "./dashboard-posted-job/dashboard-posted-job.component";
import {DashboardPostedSettingComponent} from "./dashboard-posted-setting/dashboard-posted-setting.component";
import {DashboardPostedApplicantComponent} from "./dashboard-posted-applicant/dashboard-posted-applicant.component";


@NgModule({
  declarations: [
    DashboardMainComponent,
    DashboardPostedJobComponent,
    DashboardPostedSettingComponent,
    DashboardPostedApplicantComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
