import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { FooterComponent } from './share/footer/footer.component';
import { HomeComponent } from './share/home/home.component';
import { DashboardMainComponent } from './company/dashboard-main/dashboard-main.component';
import { DashboardPostedJobComponent } from './company/dashboard-posted-job/dashboard-posted-job.component';
import { DashboardPostedApplicantComponent } from './company/dashboard-posted-applicant/dashboard-posted-applicant.component';
import { DashboardPostedSettingComponent } from './company/dashboard-posted-setting/dashboard-posted-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    DashboardMainComponent,
    DashboardPostedJobComponent,
    DashboardPostedApplicantComponent,
    DashboardPostedSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
