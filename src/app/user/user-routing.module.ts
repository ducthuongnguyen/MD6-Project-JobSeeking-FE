import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecruitmentListComponent} from "./recruitment/recruitment-list/recruitment-list.component";




const routes: Routes = [
  {
    path: 'recruitment',
    children: [
      {
        path: 'list',
        component: RecruitmentListComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
