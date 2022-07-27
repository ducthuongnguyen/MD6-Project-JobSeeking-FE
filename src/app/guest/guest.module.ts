import {NgModule} from '@angular/core';
// @ts-ignore
import {CommonModule} from '@angular/common';

import {GuestRoutingModule} from './guest-routing.module';
import {CompanyDetailComponent} from './company/company-detail/company-detail.component';
import {RecruitmentDetailComponent} from './recruitment/recruitment-detail/recruitment-detail.component';
import { RecruitmentComponent } from './recruitment/recruitment-unlock/recruitment.component';
import { CompanyComponent } from './company/company-unlock/company.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CompanyComponent,
    RecruitmentComponent,
    CompanyDetailComponent,
    RecruitmentDetailComponent
  ],
    imports: [
        CommonModule,
        GuestRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class GuestModule { }
