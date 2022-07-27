import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { RecruitmentByCompanyComponent } from './recruitment/recruitment-by-company/recruitment-by-company.component';
import {RecruitmentListComponent} from './recruitment/recruitment-list/recruitment-list.component';
import {UserRecruitmentDetailComponent} from './recruitment/user-recruitment-detail/user-recruitment-detail.component';
import {UserEditComponent} from './user-edit/user-edit.component';

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
      },
      {
        path: 'list-by-company/:id',
        component: RecruitmentByCompanyComponent
      }
    ]
  },
  {
    path: 'company',
    children: [
      {
        path: 'list',
        component: CompanyListComponent
      },

    ]
  },
  {
    path: 'edit',
    component: UserEditComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
