import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './components/user-list/user-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserRoutingModule} from "./user-routing.module";


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  exports: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule
  ]
})
export class UserModule { }
