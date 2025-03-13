import { Component } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users'; // we export users = DUMMY_USERS below; this is how we can expose this imported data in the template of this component.

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log('Selected user with id ' + id)
  }
}
