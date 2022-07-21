import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyComponent} from "./company/company.component";
import {RecruitmentComponent} from "./recruitment/recruitment.component";


const routes: Routes = [
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'recruitment',
    component: RecruitmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
