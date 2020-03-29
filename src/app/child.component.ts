import { Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `
        <ng-content></ng-content> <!-- it allows a parent component includes html-code into child component -->
        <h2>Welcome {{name}}</h2>
    `,
    styles: [`
        h2, p {
            color: navy;
        }
    `]
})
export class ChildComponent {
    name: string = 'Apanas';
}
