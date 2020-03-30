import {
    Component,
    Input,
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit } from '@angular/core';

@Component({
    selector: 'child-comp2',
    template: `<p>Hello {{name}}!</p>`
})
export class ChildComponent2 implements OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit  {

    @Input() name: string;
    count: number = 1;

    constructor() {
        this.log(`constructor`);
    }

    ngOnInit() {

        this.log(`ngOnInit`);
    }

    ngOnChanges() {
        this.log(`OnChanges`);
    }

    ngDoCheck() {
        this.log(`ngDoCheck`);
    }

    ngAfterViewInit() {
        this.log(`ngAfterViewInit`);
    }

    ngAfterViewChecked() {
        this.log(`ngAfterViewChecked`);
    }

    ngAfterContentInit() {
        this.log(`ngAfterContentInit`);
    }

    ngAfterContentChecked() {
        this.log(`ngAfterContentChecked`);
    }

    private log(msg: string) {
        console.log(this.count + ". " + msg);
        this.count++;
    }
}