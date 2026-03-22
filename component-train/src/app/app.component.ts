import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { TestDemoComponent } from './test-demo/test-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, MainComponent,TestDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];

  isShown = true;

  openShow(){
    this.isShown = !this.isShown
  }

  }

