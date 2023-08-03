import { Component, OnInit } from '@angular/core';
import {Donation} from "../../models/donation";

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit {

  donationList: Donation[];

  constructor() { }

  ngOnInit(): void {
    //TODO: ngOnInit  for Donations something idk for backend connection
  }

}
