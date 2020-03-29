import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <child-comp [userName]="name" [userAge]="age"></child-comp> <!-- binding of "name" variable/property(parent component) w/ "userName" variable/property(child component). The same for "age" -->
        <input type="text" [(ngModel)]="name" />
        <input type="number" [(ngModel)]="age" />
    `,
})

export class AppComponent {
    name: string = 'Andrei';
    age: number = 35;
}
