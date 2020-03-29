import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular 9</h1>
               <p>Angular 9 provides a modular architecture of the application</p>`,
    styles: [` 
            h1, h2{color:navy;}
            p{font-size:13px;}
            :host { 
              font-family: Verdana;
              color: #555;
            } 
    `] // styles applies to current component only. Selector "host" is linked to element in which component is hosted (element <my-app>, in this case)
})

export class AppComponent { }
