import { Component } from "@angular/core";

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    standalone: true,
    styleUrl: './navigation-bar.component.css'
})

export class NavigationBarComponent{
    title = 'My Navigation Component';
    
}