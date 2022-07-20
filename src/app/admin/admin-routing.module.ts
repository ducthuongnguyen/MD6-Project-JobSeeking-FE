import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListJobComponent} from "./recruitment/list-job/list-job.component";
import {CompanyListComponent} from './company/company-list/company-list.component';
import {UpdateStatusComponent} from './company/update-status/update-status.component';
import {PendingApprovalListComponent} from "./company/pending-approval-list/pending-approval-list.component";
import {CompanyBlockComponent} from "./company/company-block/company-block.component";
import {RecruitmentBlockComponent} from "./recruitment/recruitment-block/recruitment-block.component";




const routes: Routes = [
  {
    path: 'company',
    children: [
      {
        path: 'main',
        component: CompanyListComponent
      },
      {
        path: 'update-status/:id',
        component: UpdateStatusComponent
      },
      {
        path: 'pending',
        component: PendingApprovalListComponent
      },
      {
        path: 'block',
        component: CompanyBlockComponent
      }
    ]
  },
  {
    path: 'recruitment',
    children: [
      {
        path: 'listJob',
        component: ListJobComponent
      },
      {
        path: 'block',
        component: RecruitmentBlockComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
