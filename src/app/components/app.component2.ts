import { Component } from '@angular/core';

@Component({
    selector: 'my-app2', // Binding of value to HTML-element property (not ot attribute of element)
    template: `<input type="text" [value]="name" />`
})
export class AppComponent2 {
    name: string = "Andrei";
}