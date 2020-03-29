import { Component } from '@angular/core';

@Component({
    selector: 'my-app5', // allows to change value on one side dynamically if something is changing on other side (usually, uses for DOM elements like "input")
    template: `<p>Hello {{name}}</p> <!-- One way binding -->
    <input type="text" [(ngModel)]="name" /> <br><br> <!-- Two ways binding -->
    <input type="text" [(ngModel)]="name" /> <!-- Two ways binding -->
    `
})
export class AppComponent5 {
    name: string = "Andrei";
}