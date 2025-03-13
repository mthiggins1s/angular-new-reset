import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html', // we can now access the selectedUser template in this component.
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar!: string; // With @Input added, we can then go to the place where we use the component as an element (app.component.html), and set the avatar property.
  @Input() name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {}
}
