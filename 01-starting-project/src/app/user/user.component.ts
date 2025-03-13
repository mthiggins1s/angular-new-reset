import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html', // we can now access the selectedUser template in this component.
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) id!: string
  @Input({ required: true }) avatar!: string; // using Inputs allows you to reuse components with different data.
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter() // we can use any name, but we choose select because we want to create a custom 'select' event. new EventEmitter() will allow us to emit custom values through the SELECT property to any parent component thats interested.

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id); // we pass the value that should be emitted to this 'emit' method that is provided by the EventEmitter. (We dont have to if we dont want to)
  }
}