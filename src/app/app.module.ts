import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserModule} from './user/user.module';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user/components/user-list/user-list.component';
import {UserDetailsComponent} from './user/components/user-details/user-details.component';
import { DonationListComponent } from './donation/components/donation-list/donation-list.component';
import { DonationComponent } from './donation/components/donation-details/donation.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent},
  { path: 'users/:id', component: UserDetailsComponent},
  { path: '', redirectTo: 'users', pathMatch: 'full'},
  { path: '**', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    DonationListComponent,
    DonationComponent
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
