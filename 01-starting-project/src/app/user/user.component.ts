import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length) // this should give you a random number between zero and the highest available index in the array.


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html', // we can now access the selectedUser template in this component.
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex] // draws the random user in the index.

  get imagePath() { // getter; method (a function inside a class). thats usable like a property. It doesn't need to be called and executed EXPLICITLY and meant to be produced and to return a value.
    return 'assets/users/' + this.selectedUser.avatar // we use the this. keyword to access this class.
  }

  onSelectUser() { // regular method that can added to any class.
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length) // added this to generate a new, locally scoped randomIndex thats only available in this.selectedUser. We use this to extract and store a new user from DUMMY_USERS.
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
