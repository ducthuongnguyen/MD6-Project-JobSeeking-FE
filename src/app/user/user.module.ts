import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RecruitmentListComponent } from './recruitment/recruitment-list/recruitment-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


// @ts-ignore
@NgModule({
  declarations: [

  RecruitmentListComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserModule { }
