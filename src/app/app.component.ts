import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <p #nameText>{{name}}</p>
        <p>{{nameText.textContent}}</p>
        <button (click)="change()">Change</button>
    `
})
export class AppComponent {

    @ViewChild("nameText", {static: false})
    nameParagraph: ElementRef; // property "nameParagraph" is linked with "nameText" variable. Type ElementRef uses for a link to  html-elements

    name: string = "Andrei";

    change() {
        console.log(this.nameParagraph.nativeElement.textContent);
        this.nameParagraph.nativeElement.textContent = "hell";
    }
}