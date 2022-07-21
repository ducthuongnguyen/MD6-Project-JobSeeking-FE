import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyUpdateComponent } from './company/company-update/company-update.component';
import { AddRecruitmentComponent } from './recruitment/add-recruitment/add-recruitment.component';
import { BlockListComponent } from './recruitment/block-list/block-list.component';
import { ListJobComponent } from './recruitment/list-job/list-job.component';
import { OurListComponent } from './recruitment/our-list/our-list.component';


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
        path: 'our-list/:id',
        component: OurListComponent
      },
      {
        path: 'block-list',
        component: BlockListComponent
      },
      {
        path: 'add',
        component: AddRecruitmentComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
