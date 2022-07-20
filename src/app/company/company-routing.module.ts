import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyUpdateComponent} from "./company/company-update/company-update.component";
import {CompanyListComponent} from "./company/company-list/company-list.component";
import {ListJobComponent} from "./recruitment/list-job/list-job.component";
import {OurListComponent} from "./recruitment/our-list/our-list.component";
import {BlockListComponent} from "./recruitment/block-list/block-list.component";


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
