import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserModule} from './user/user.module';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user/components/user-list/user-list.component';
import {UserDetailsComponent} from './user/components/user-details/user-details.component';
import { DonationListComponent } from './donation/components/donation-list/donation-list.component';
import { DonationDetailComponent } from './donation/components/donation-details/donation-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { DonationRoutingModule } from './donation/donation-routing.module';
import {DonationsModule} from "./donation/donations.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButton} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    DonationsModule,
      AppRoutingModule,
      BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
