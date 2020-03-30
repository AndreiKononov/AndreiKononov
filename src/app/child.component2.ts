import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-comp2',
    template: `
        <input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />  <!-- One way binding of attribute "ngModel" (means value of this attribute) with property "userName" -->
    `
})
export class ChildComponent2 {
    @Input() userName: string;
    @Output() userNameChange = new EventEmitter<string>();

    onNameChange(model: string){
        this.userName = model;
        this.userNameChange.emit(model);
    }
}