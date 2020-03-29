import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <child-comp></child-comp>
        <child-comp><h1>Display me</h1></child-comp> <!-- content of <h1> doesn't display (it displays <child-comp> template) -->
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
