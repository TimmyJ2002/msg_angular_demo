import { Component } from '@angular/core';
import {User} from './user/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Donation Manager';

  users: User[] = [
    new User(1, 'user1', 'user_email1@yahoo.com', '1234'),
    new User(2, 'user2', 'user_email2@yahoo.com', '1234'),
    new User(3, 'user3', 'user_email3@yahoo.com', '1234')
  ];
}
