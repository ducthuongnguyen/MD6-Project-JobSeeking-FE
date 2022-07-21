import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardMainComponent} from "./company/dashboard-main/dashboard-main.component";
import {DashboardPostedJobComponent} from "./company/dashboard-posted-job/dashboard-posted-job.component";
import {DashboardPostedApplicantComponent} from "./company/dashboard-posted-applicant/dashboard-posted-applicant.component";
import {DashboardPostedSettingComponent} from "./company/dashboard-posted-setting/dashboard-posted-setting.component";


const routes: Routes = [
  {
    path: 'company',
    children: [
      {
        path: 'update',
        component: CompanyUpdateComponent
      },
      {
        path: 'list',
        component: CompanyListComponent
      }
    ]
  },
  {
    path: 'recruitment',
    children: [
      {
        path: 'list',
        component: ListJobComponent
      },
      {
        path: 'our-list',
        component: OurListComponent
      },
      {
        path: 'block-list',
        component: BlockListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
