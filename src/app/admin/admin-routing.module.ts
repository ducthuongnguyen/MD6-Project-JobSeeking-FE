import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardMainComponent} from "./company/dashboard-main-test/dashboard-main.component";
import {DashboardPostedJobComponent} from "./company/dashboard-posted-job/dashboard-posted-job.component";
import {
  DashboardPostedApplicantComponent
} from "./company/dashboard-posted-applicant/dashboard-posted-applicant.component";
import {DashboardPostedSettingComponent} from "./company/dashboard-posted-setting/dashboard-posted-setting.component";
import {ListJobComponent} from "./recruitment/list-job/list-job.component";



const routes: Routes = [
  {
    path: 'company',
    children: [
      {
        path: 'main',
        component: DashboardMainComponent
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
        path: 'list-job',
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
