import { Component } from '@angular/core';

@Component({
  selector: 'app-test-demo',
  standalone: true,
  imports: [],
  templateUrl: './test-demo.component.html',
  styleUrl: './test-demo.component.css'
})
export class TestDemoComponent {
  numbers = [1, 2, 3, 4, 5];

  isShown = true;

  openShow(){
    this.isShown = !this.isShown
  }
}
