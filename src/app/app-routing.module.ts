import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './share/home/home.component';
import {DashboardMainComponent} from './company/dashboard-main/dashboard-main.component';
import {DashboardPostedJobComponent} from './company/dashboard-posted-job/dashboard-posted-job.component';
import {DashboardPostedApplicantComponent} from './company/dashboard-posted-applicant/dashboard-posted-applicant.component';
import {DashboardPostedSettingComponent} from './company/dashboard-posted-setting/dashboard-posted-setting.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'company',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./company/company.module').then(module => module.CompanyModule)
  },
  {
    path: 'recruitment',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./recruitment/recruitment.module').then(module => module.RecruitmentModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
