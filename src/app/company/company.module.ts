import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import {DashboardMainComponent} from "./company/dashboard-main/dashboard-main.component";
import {DashboardPostedJobComponent} from "./company/dashboard-posted-job/dashboard-posted-job.component";
import {DashboardPostedApplicantComponent} from "./company/dashboard-posted-applicant/dashboard-posted-applicant.component";
import {ListJobComponent} from "./recruitment/list-job/list-job.component";
import { CompanyUpdateComponent } from './company/company-update/company-update.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DashboardMainComponent,
    DashboardPostedJobComponent,
    DashboardPostedApplicantComponent,
    ListJobComponent,
    CompanyUpdateComponent,

  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CompanyModule { }
