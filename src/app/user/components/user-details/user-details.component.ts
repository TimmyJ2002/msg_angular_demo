import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User;
  @Output() editUser = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  onEditClicked(user: User) {
    this.editUser.emit(user)
  }
}
