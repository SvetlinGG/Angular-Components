import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users = [
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
      address: 'India'
    },
    {
      name: 'Rajesh',
      age: 35,
      id: 3,
      address: 'India'
    }
  ]
}
