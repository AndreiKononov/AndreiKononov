import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <p #userName>{{name}}</p> <!-- initialisation of template variable using #. We can use this variable inside template only -->
        <p>{{userName.textContent}}</p>
        <input type="text" [(ngModel)]="name" placeholder="name">
        <hr>
        <child-comp #counter></child-comp>
        <button (click)="counter.increment()">+</button> <!-- using in template only -->
        <button (click)="counter.decrement()">-</button>
    `
})

export class AppComponent {
    name: string = 'Andrei';

    // increment() { this.counter++; }   variable "counter" doesn't exist in component
    // decrement() { this.counter--; }  -- // -- // --

}
