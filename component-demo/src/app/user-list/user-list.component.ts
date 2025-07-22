import { Component } from '@angular/core';
import { User } from './types';
import { UserItemComponent } from './user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  imports: [UserItemComponent],
  standalone: true,

  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = [
    {
      name: 'Raj',
      age: 25,
      id: 1,
      address: 'India'
    },
    {
      name: 'Rahul',
      age: 30,
      id: 2,
      address: 'Pakistan'
    },
    {
      name: 'Rajesh',
      age: 35,
      id: 3,
      address: 'Indonesia'
    }
  ]
}
