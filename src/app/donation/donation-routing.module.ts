import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DonationListComponent} from "./components/donation-list/donation-list.component";
import {DonationDetailComponent} from "./components/donation-details/donation-detail.component";

const routes: Routes = [
  {path:'donations', component: DonationListComponent},
  {path:'donations/:id', component: DonationDetailComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class DonationRoutingModule { }
