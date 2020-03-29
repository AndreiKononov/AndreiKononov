import { Component, Input } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `
        <p>User name: {{userName}}</p>
        <p>User age: {{userAge}}</p>
    `,
})
export class ChildComponent {
    @Input() userName: string; // The decorator @Input() defines property "userName" as a input property
    @Input() userAge: number; // The decorator @Input() defines property "userAge" as a input property
}
