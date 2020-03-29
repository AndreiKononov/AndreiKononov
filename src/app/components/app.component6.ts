import { Component } from '@angular/core';

@Component({
    selector: 'my-app6', // binding to CSS class
    template: `
        <div [class]="red"></div>                       <!-- using of binding to set class -->
        <hr>
        <div [class.is_red_box]="isRed"></div>          <!-- binding of variable "isRed" to class "is_red_box" -->
        <div [class.is_red_box]="!isRed"></div>         <!-- binding of variable "isRed" to class "is_red_box" -->
        <input type="checkbox" [(ngModel)]="isRed" />   <!-- Two ways binding of input element to variable "IsRed" (using boolean value) -->
    `,
    styles: [`
        div {
            width: 50px;
            height: 50px;
            border: 1px solid #ccc;            
        }
        .is_red_box {
            background-color: red;
        }
    `],
})
export class AppComponent6 {
    red: string = 'is_red_box';
    isRed: boolean = false;
}