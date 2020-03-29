import { Component } from '@angular/core';

@Component({
    selector: 'my-app7', // binding to CSS style
    template: `
        <div [style.backgroundColor]="isRed ? 'red' : 'green'"></div>
        <div [style.background-color]="!isRed ? 'red' : 'green'"></div>
        <input type="checkbox" [(ngModel)]="isRed" />                       <!-- Two ways binding of input element to variable "IsRed" (using boolean value) -->
    `,
    styles: [`
        div {
            width: 50px;
            height: 50px;
            border: 1px solid #ccc;            
        }
    `],
})
export class AppComponent7 {
    isRed: boolean = false;
}