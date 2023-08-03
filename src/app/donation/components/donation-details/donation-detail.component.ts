import {Component, Input, OnInit} from '@angular/core';
import {Donation} from "../../models/donation";

@Component({
  selector: 'app-donation',
  templateUrl: './donation-detail.component.html',
  styleUrls: ['./donation-detail.component.css']
})
export class DonationDetailComponent implements OnInit {

  @Input() donation: Donation;

  constructor() { }

  ngOnInit(): void {
  }

}
