import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <child-comp>
            <h2>Welcome {{name}}!</h2> <!-- due to <ng-content> in template of child component -->
        </child-comp>
    `,
    styles: [`
        h2, p {
            color: #333;
        }    
    `],
})

export class AppComponent {
    name: string = 'Andrei';
}
