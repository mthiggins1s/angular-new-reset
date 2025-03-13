import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length) // this should give you a random number between zero and the highest available index in the array.


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html', // we can now access the selectedUser template in this component.
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]) // draws the random user in the index.

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar) // this is how to compute value when using SIGNALS. Now why would you do this? When you use a computed function, Angular automatically analyzes whether you are reading a signal value inside the function you passed, and Angular sets up a subscription to that signal thats being used (selectedUser signal). When that signal recieves a value, Angular will RECOMPUTE the imagePath.

  // get imagePath() { // getter; method (a function inside a class). thats usable like a property. It doesn't need to be called and executed EXPLICITLY and meant to be produced and to return a value.
  //   return 'assets/users/' + this.selectedUser.avatar // we use the 'this.' keyword to access this class.
  // }

  onSelectUser() { // regular method that can added to any class.
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length) // added this to generate a new, locally scoped randomIndex thats only available in this.selectedUser. We use this to extract and store a new user from DUMMY_USERS. * Lines 13 through 23 is how we update STATE.
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
