import { Component } from '@angular/core';

@Component({
    selector: 'my-app', // Binding of DOM element to component value (using {{expression}})
    template: `<p>Name: {{name}}</p>
               <p>Age: {{age}}</p>`
})

export class AppComponent {
    name = "Andrei";
    age = 35;
}
