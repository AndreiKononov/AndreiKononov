import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <h2>Clicks count = {{clicks}}</h2>
        <child-comp (onChanged)="onChanged($event)"></child-comp>
    `,
})

export class AppComponent {
    clicks: number = 0;
    onChanged(incresed: any) {
        incresed == true ? this.clicks++ : this.clicks--;
    }
}
