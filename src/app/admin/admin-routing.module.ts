import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardPostedJobComponent} from "./company/dashboard-posted-job/dashboard-posted-job.component";
import {
  DashboardPostedApplicantComponent
} from "./company/dashboard-posted-applicant/dashboard-posted-applicant.component";
import {DashboardPostedSettingComponent} from "./company/dashboard-posted-setting/dashboard-posted-setting.component";
import {ListJobComponent} from "./recruitment/list-job/list-job.component";
import {CompanyListComponent} from './company/company-list/company-list.component';
import {UpdateStatusComponent} from './company/update-status/update-status.component';




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
        path: 'posterJob',
        component: DashboardPostedJobComponent
      },
      {
        path: 'postedApplicant',
        component: DashboardPostedApplicantComponent
      },
      {
        path: 'setting',
        component: DashboardPostedSettingComponent
      }
    ]
  },
  {
    path: 'recruitment',
    children: [
      {
        path: 'listJob',
        component: ListJobComponent
      }
    ]
  }

  // {
  //   path: 'main',
  //   component: DashboardMainComponent
  // },
  // {
  //   path: 'posterJob',
  //   component: DashboardPostedJobComponent
  // },
  // {
  //   path: 'postedApplicant',
  //   component: DashboardPostedApplicantComponent
  // },
  // {
  //   path: 'setting',
  //   component: DashboardPostedSettingComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
