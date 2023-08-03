import { Injectable } from '@angular/core';
import {DonationListComponent} from "../components/donation-list/donation-list.component";
import {Donation} from "../models/donation";
import {User} from "../../user/models/user";


@Injectable({
  providedIn: 'root'
})
export class DonationService {
 /*const donation: Donation[] = [
    { id: 1, amount: '100', currency: 'USD', createdBy: user1 },
    { id: 2, amount: '50', currency: 'EUR', createdBy: user2 },
    { id: 3, amount: '200', currency: 'GBP', createdBy: user3 }
  ];*/


  constructor() { }
}
