import {  Component, Input, OnInit, OnChanges, SimpleChanges  } from "@angular/core";

@Component({
    selector: 'child-comp',
    template: `
        <p>Hello {{name}}!</p>
    `
})

export class ChildComponent implements OnInit, OnChanges {
    @Input() name: string;

    constructor() {
        this.log(`constructor`);
    }

    ngOnInit() {
        this.log(`onInit`);
    }
    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
            let chng = changes[propName];
            let curVal = JSON.stringify(chng.currentValue);
            let prevVal = JSON.stringify(chng.previousValue);
            this.log(`${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`)
        }
    }

    private log(msg: string) {
        console.log(msg);
    }
}
