import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './share/home/home.component';
import {AuthGuard} from "./helper/auth-guard";


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
    canActivate: [AuthGuard],
    loadChildren: () => import('./company/company.module').then(module => module.CompanyModule)
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  },
  {
    path: 'guest',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./guest/guest.module').then(module => module.GuestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
