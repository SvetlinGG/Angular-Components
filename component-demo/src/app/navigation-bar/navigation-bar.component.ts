import { Component } from "@angular/core";

@Component({
    selector: 'app-navigation-bar',
    template: `<div class="nav-bar">
        <div class="nav-btn">Home</div>
        <div class="nav-btn">Contacts</div>
        <div class="nav-btn">About</div>
    </div>`,
    standalone: true,
    styles: `.nav-bar {
        width: 100%;
        height: 30px;
        padding: 10px;
        background-color: skyblue;
        color: black;
        display: flex;

        .nav-btn {
            border: 1px solid red;
            padding: 10px;
        }
        .nav-btn:hover {
            cursor: pointer;
        }
    }`
})

export class NavigationBarComponent{}