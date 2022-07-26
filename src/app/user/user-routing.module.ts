import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecruitmentListComponent} from './recruitment/recruitment-list/recruitment-list.component';
import {UserRecruitmentDetailComponent} from './recruitment/user-recruitment-detail/user-recruitment-detail.component';




const routes: Routes = [
  {
    path: 'recruitment',
    children: [
      {
        path: 'list',
        component: RecruitmentListComponent
      },
      {
        path: 'detail/:id',
        component: UserRecruitmentDetailComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
