import { Component, Output,  EventEmitter} from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `
        <button (click)="change(true)" >+</button>
        <button on-click="change(false)" >-</button>
    `,
})
export class ChildComponent {
    @Output()
        onChanged = new EventEmitter<boolean>(); // pass to parent component "true" or "false"

    change(increased: any) {
        this.onChanged.emit(increased);
    }
}
