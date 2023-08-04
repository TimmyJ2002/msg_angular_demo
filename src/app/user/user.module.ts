import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './components/user-list/user-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserRoutingModule} from "./user-routing.module";
import { UserRegisterComponent } from './components/user-register/user-register.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButton, MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    UserRegisterComponent
  ],
  exports: [
    UserListComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class UserModule { }
