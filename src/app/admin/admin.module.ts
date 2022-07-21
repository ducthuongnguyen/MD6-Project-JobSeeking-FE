import {NgModule} from '@angular/core';
// @ts-ignore
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {ListJobComponent} from "./recruitment/list-job/list-job.component";
import {CompanyListComponent} from './company/company-list/company-list.component';
import {UpdateStatusComponent} from './company/update-status/update-status.component';
import {PendingApprovalListComponent} from './company/pending-approval-list/pending-approval-list.component';
import {CompanyBlockComponent} from './company/company-block/company-block.component';
import {RecruitmentBlockComponent} from './recruitment/recruitment-block/recruitment-block.component';


@NgModule({
  declarations: [
    ListJobComponent,
    CompanyListComponent,
    UpdateStatusComponent,
    PendingApprovalListComponent,
    CompanyBlockComponent,
    RecruitmentBlockComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
}
