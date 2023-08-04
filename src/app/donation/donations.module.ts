import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DonationRoutingModule} from "./donation-routing.module";
import {DonationListComponent} from "./components/donation-list/donation-list.component";
import {DonationDetailComponent} from "./components/donation-details/donation-detail.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
      DonationListComponent,
      DonationDetailComponent
  ],
  exports: [
      DonationListComponent
  ],
  imports: [
    CommonModule,
    DonationRoutingModule,
    HttpClientModule,
    DonationRoutingModule
  ]
})
export class DonationsModule { }
