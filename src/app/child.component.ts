import { Component, Input } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `
        <p>User name: {{userName}}</p>
        <p>User age: {{userAge}}</p>
    `,
})
export class ChildComponent {
    @Input() userName: string;      // The decorator @Input() defines property "userName" as a input property
    _userAge: number;
    @Input()                        // The decorator @Input() defines setter "userAge()" to check/modify a value which get from parent component
        set userAge(age: number) {
            if (age < 0)
                this._userAge = 0;
            else if (age > 100)
                this._userAge = 100;
            else
                this._userAge = age;
        }
        get userAge() {
            return this._userAge;
        }
}
