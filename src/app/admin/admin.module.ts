import {NgModule} from '@angular/core';
// @ts-ignore
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {ListJobComponent} from "./recruitment/list-job/list-job.component";
import {CompanyListComponent} from './company/company-list/company-list.component';
import {PendingApprovalListComponent} from './company/pending-approval-list/pending-approval-list.component';
import {CompanyBlockComponent} from './company/company-block/company-block.component';
import {RecruitmentBlockComponent} from './recruitment/recruitment-block/recruitment-block.component';
// @ts-ignore
import {MatPaginatorModule} from "@angular/material/paginator";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListJobComponent,
    CompanyListComponent,
    PendingApprovalListComponent,
    CompanyBlockComponent,
    RecruitmentBlockComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ]
})
export class AdminModule {
}
