import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  users = [
    {id: 1, name: "Svetlin Garabedyan", age: 53},
    {id: 2, name: "Ivan Ivanov", age: 33},
    {id: 3, name: "Pesho Petrov", age: 43},
    {id: 4, name: "Maria Marieva", age: 23},
  ]
}
