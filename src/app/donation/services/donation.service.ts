import { Injectable } from '@angular/core';
import {DonationListComponent} from "../components/donation-list/donation-list.component";
import {Donation} from "../models/donation";
import {User} from "../../user/models/user";
import {Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DonationService {
  donations = of ([
    { id: 1, amount: '100', currency: 'USD', createdBy: new User(1, 'user1', 'user_email1@yahoo.com', '1234') },
    { id: 2, amount: '50', currency: 'EUR', createdBy:  new User(2, 'user2', 'user_email2@yahoo.com', '1234') },
    { id: 3, amount: '200', currency: 'GBP', createdBy: new User(3, 'user3', 'user_email3@yahoo.com', '1234') }
  ]);

  getDonations(): Observable<Donation[]>{
    return this.donations;
  }

  constructor() { }
}
