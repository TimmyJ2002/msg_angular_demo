import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from "./components/user-list/user-list.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    { path: 'users', component: UserListComponent},
    { path: 'users/:id', component: UserDetailsComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forChild(routes)
  ],
    exports:[
        RouterModule
    ]
})
export class UserRoutingModule { }
