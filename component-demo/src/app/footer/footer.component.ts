import { Component } from "@angular/core";


@Component({
    selector: 'app-footer',
    template: `
    <footer>
        <p>&copy; {{title}} 2017</p>
    </footer>
    `
})

export class FooterComponent{
    title = 'SoftUni';
}