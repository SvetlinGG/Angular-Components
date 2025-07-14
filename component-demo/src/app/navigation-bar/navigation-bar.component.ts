import { Component } from "@angular/core";

@Component({
    selector: 'app-navigation-bar',
    template: `<div class="nav-bar">Hello this is my navigation</div>`,
    standalone: true,
    styles: `.nav-bar {
        width: 100%;
        height: 30px;
        padding: 10px;
        background-color: skyblue;
        color: black;
    }`
})

export class NavigationBarComponent{}