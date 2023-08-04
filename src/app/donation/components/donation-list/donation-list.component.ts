import { Component, OnInit } from '@angular/core';
import {Donation} from "../../models/donation";
import {DonationService} from "../../services/donation.service";

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit {

  donationList: Donation[];

  constructor(private donationService:DonationService) { }

  ngOnInit(): void {
    //TODO: ngOnInit  for Donations something idk for backend connection
      this.donationService.getDonations().subscribe((donations ) => this.donationList= donations);
  }

}
