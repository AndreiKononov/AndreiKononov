import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <h2>Clicks count = {{clicks}}</h2>
        <!-- parameter $event encapsulates all data which passes from child component -->
        <child-comp (onChanged)="onChanged($event)"></child-comp> <!-- (onChanged)="onChanged($event)" allows to bind method onChanged() to event onChanged -->
        <hr>
        <child-comp2 [(userName)]="name"></child-comp2>   <!-- Two ways binding between property "userName" of child2 component and property "name" of parent component  -->
        <div>Chosen name: {{name}}</div>
    `,
})

export class AppComponent {
    clicks: number = 0;
    name: string = 'Andrei';

    onChanged(incresed: any) {
        incresed == true ? this.clicks++ : this.clicks--;
    }
}
