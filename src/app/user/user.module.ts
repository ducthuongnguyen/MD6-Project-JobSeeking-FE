import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {DashboardMainComponent} from "./company/dashboard-main/dashboard-main.component";
import {DashboardPostedJobComponent} from "./company/dashboard-posted-job/dashboard-posted-job.component";
import {DashboardPostedSettingComponent} from "./company/dashboard-posted-setting/dashboard-posted-setting.component";
import {DashboardPostedApplicantComponent} from "./company/dashboard-posted-applicant/dashboard-posted-applicant.component";
import {ListJobComponent} from "./recruitment/list-job/list-job.component";
import { DetailRecruitmentComponent } from './recruitment/detail-recruitment/detail-recruitment.component';


// @ts-ignore
@NgModule({
  declarations: [
    DashboardMainComponent,
    DashboardPostedJobComponent,
    DashboardPostedSettingComponent,
    DashboardPostedApplicantComponent,
    ListJobComponent,
    DetailRecruitmentComponent,
    ListJobComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
