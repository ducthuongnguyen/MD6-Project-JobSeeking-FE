import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RecruitmentListComponent } from './recruitment/recruitment-list/recruitment-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserRecruitmentDetailComponent } from './recruitment/user-recruitment-detail/user-recruitment-detail.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { RecruitmentByCompanyComponent } from './recruitment/recruitment-by-company/recruitment-by-company.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {MatPaginatorModule} from '@angular/material';
import { FindByUserComponent } from './recruitment/find-by-user/find-by-user.component';


// @ts-ignore
@NgModule({
  declarations: [

  RecruitmentListComponent,

  UserRecruitmentDetailComponent,

  CompanyListComponent,

  RecruitmentByCompanyComponent,

  UserEditComponent,

  FindByUserComponent

  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatPaginatorModule,
    ]
})
export class UserModule { }
