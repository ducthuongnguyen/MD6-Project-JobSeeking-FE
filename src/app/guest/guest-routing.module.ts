import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import {CompanyComponent} from './company/company-unlock/company.component';
import { RecruitmentDetailComponent } from './recruitment/recruitment-detail/recruitment-detail.component';
import { RecruitmentComponent } from './recruitment/recruitment-unlock/recruitment.component';


const routes: Routes = [
  {
    path: 'company',
    children: [
      {
        path: '',
        component: CompanyComponent,
      },
      {
        path: 'detail/:id',
        component: CompanyDetailComponent,
      }
    ]
  },
  {
    path: 'recruitment',
    children: [
      {
        path: '',
        component: RecruitmentComponent,
      },
      {
        path: 'detail/:id',
        component: RecruitmentDetailComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule {
}
