import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <child-comp></child-comp>
        <p>Hello {{name}}</p>        
    `,
    styles: [`
        h2, p {
            color: #333;
        }    
    `],
})

export class AppComponent {
    name: string = 'Apanas';
}
