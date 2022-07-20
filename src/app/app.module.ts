import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { FooterComponent } from './share/footer/footer.component';
import { HomeComponent } from './share/home/home.component';
import { DashboardMainComponent } from './company/company/dashboard-main/dashboard-main.component';
import { DashboardPostedJobComponent } from './company/company/dashboard-posted-job/dashboard-posted-job.component';
import { DashboardPostedApplicantComponent } from './company/company/dashboard-posted-applicant/dashboard-posted-applicant.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
