import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardMainComponent} from "./dashboard-main/dashboard-main.component";
import {DashboardPostedJobComponent} from "./dashboard-posted-job/dashboard-posted-job.component";
import {DashboardPostedApplicantComponent} from "./dashboard-posted-applicant/dashboard-posted-applicant.component";
import {DashboardPostedSettingComponent} from "./dashboard-posted-setting/dashboard-posted-setting.component";


const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
