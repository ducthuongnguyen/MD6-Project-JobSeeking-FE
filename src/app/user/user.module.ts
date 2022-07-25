import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RecruitmentListComponent } from './recruitment/recruitment-list/recruitment-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserRecruitmentDetailComponent } from './recruitment/user-recruitment-detail/user-recruitment-detail.component';


// @ts-ignore
@NgModule({
  declarations: [

  RecruitmentListComponent,

  UserRecruitmentDetailComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserModule { }
