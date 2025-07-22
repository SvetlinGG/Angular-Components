import { Component } from '@angular/core';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-test-demo',
  imports: [PopupComponent],
  templateUrl: './test-demo.component.html',
  styleUrl: './test-demo.component.css'
})
export class TestDemoComponent {
  numbers = [1, 2, 3, 4, 5];

  isShown = true;

  randomMsg = 'random-red';

  

  toggleModal(){
    this.randomMsg = this.isShown ? 'random-green' : 'random-red';
    this.isShown = !this.isShown;

  }

}
