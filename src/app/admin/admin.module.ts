import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {DashboardPostedJobComponent} from "./company/dashboard-posted-job/dashboard-posted-job.component";
import {DashboardPostedSettingComponent} from "./company/dashboard-posted-setting/dashboard-posted-setting.component";
import {DashboardPostedApplicantComponent} from "./company/dashboard-posted-applicant/dashboard-posted-applicant.component";
import {ListJobComponent} from "./recruitment/list-job/list-job.component";
import {DashboardMainComponent} from "./company/dashboard-main-test/dashboard-main.component";


@NgModule({
  declarations: [
    DashboardMainComponent,
    DashboardPostedJobComponent,
    DashboardPostedSettingComponent,
    DashboardPostedApplicantComponent,
    ListJobComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
