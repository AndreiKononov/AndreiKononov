import { Component } from '@angular/core';

@Component({
    selector: 'my-app4', // Binding to event
    template: `<p>Clicks count = {{count}}</p>
<!--               <button (click)="increase()">Click</button>--> <!--  -->
<!--               <button on-click="increase()">Click</button>-->
               <button on-click="increase2($event)">Click</button> <!-- $event - build-in object to Angular which pass info about event -->
    `
})
export class AppComponent4 {
    count: number = 0;
    increase(): void {
        this.count++;
    }
    increase2($event : any) : void {
        this.count++;
        console.log($event);
    }
}