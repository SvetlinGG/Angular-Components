import { Component } from "@angular/core";

@Component({
    selector: 'app-navigation-bar',
    template: `<div class="nav-bar">
        <div>{{title}}</div>
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
        justify-content: center;
        align-items: center;

        .nav-btn {
            margin-left: 10px;
            padding: 10px;
            border: 1px solid black;
        }
        .nav-btn:hover {
            cursor: pointer;
            background-color: grey;
            color: white;
        }
    }`
})

export class NavigationBarComponent{
    title = 'My Navigation Component';
}