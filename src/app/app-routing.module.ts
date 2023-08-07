import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "./user/components/user-list/user-list.component";
import {UserDetailsComponent} from "./user/components/user-details/user-details.component";
import {DonationListComponent} from "./donation/components/donation-list/donation-list.component";
import {DonationDetailComponent} from "./donation/components/donation-details/donation-detail.component";
import {UserLoginComponent} from "./login/components/user-login.component";

const routes: Routes = [
    { path: 'login', component: UserLoginComponent},
    { path: '', redirectTo: 'users', pathMatch: 'full'},
    { path: '**', redirectTo: 'users', pathMatch: 'full'},

];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
