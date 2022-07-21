import {NgModule} from '@angular/core';
// @ts-ignore
import {CommonModule} from '@angular/common';

import {CompanyRoutingModule} from './company-routing.module';
import {ListJobComponent} from "./recruitment/list-job/list-job.component";
import {CompanyUpdateComponent} from './company/company-update/company-update.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CompanyListComponent} from './company/company-list/company-list.component';
import {OurListComponent} from './recruitment/our-list/our-list.component';
import { BlockListComponent } from './recruitment/block-list/block-list.component';
import { AddRecruitmentComponent } from './recruitment/add-recruitment/add-recruitment.component';
import { EditRecruitmentComponent } from './recruitment/edit-recruitment/edit-recruitment.component';


@NgModule({
  declarations: [
    ListJobComponent,
    CompanyUpdateComponent,
    CompanyListComponent,
    OurListComponent,
    BlockListComponent,
    AddRecruitmentComponent,
    EditRecruitmentComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CompanyModule { }
