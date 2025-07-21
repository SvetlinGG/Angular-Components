import { Component } from '@angular/core';

@Component({
  selector: 'app-test-demo',
  //imports: [],
  templateUrl: './test-demo.component.html',
  styleUrl: './test-demo.component.css'
})
export class TestDemoComponent {
  numbers = [1, 2, 3, 4, 5];

  isShown = true;

  randomMsg = 'random-red';

  dogImg = "https://tse2.mm.bing.net/th/id/OIP.RE5hy-cYDEedlP-woCr7HgHaE9?pid=Api&P=0&h=220"

  toggleModal(){
    this.randomMsg = this.isShown ? 'random-green' : 'random-red';
    this.isShown = !this.isShown;

  }

}
