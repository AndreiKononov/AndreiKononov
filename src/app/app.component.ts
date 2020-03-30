import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <p>Hello {{name}}!</p>
    `
})

export class AppComponent implements OnInit, OnDestroy {
    name: string = 'Andrei';

    constructor() {
        this.log(`constructor`);
    }

    ngOnInit() {
        this.log(`onInit`);
    }

    ngOnDestroy() {
        this.log(`onDestroy`);
    }

    private log(msg: string) {
        console.log(msg);
    }
}
