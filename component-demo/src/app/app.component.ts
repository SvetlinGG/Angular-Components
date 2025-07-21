import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, NavigationBarComponent, FooterComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'component-demo';

  numbers = [1, 2, 3, 4, 5];

  isShown = true;

  dogImg = "https://tse2.mm.bing.net/th/id/OIP.RE5hy-cYDEedlP-woCr7HgHaE9?pid=Api&P=0&h=220"

  toggleModal(){
    this.isShown = !this.isShown;

  }
}
