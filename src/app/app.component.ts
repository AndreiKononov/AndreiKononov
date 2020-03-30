import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <h2>Clicks count = {{clicks}}</h2>
        <!-- parameter $event encapsulates all data which passes from child component -->
        <child-comp (onChanged)="onChanged($event)"></child-comp> <!-- (onChanged)="onChanged($event)" allows to bind method onChanged() to event onChanged -->
    `,
})

export class AppComponent {
    clicks: number = 0;
    onChanged(incresed: any) {
        incresed == true ? this.clicks++ : this.clicks--;
    }
}
