import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserModule} from './user/user.module';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user/components/user-list/user-list.component';
import {UserDetailsComponent} from './user/components/user-details/user-details.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent},
  { path: 'users/:id', component: UserDetailsComponent},
  { path: '', redirectTo: 'users', pathMatch: 'full'},
  { path: '**', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
