import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <child-comp>
            <h3 #headerContent>Welcome {{name}}!</h3>
        </child-comp>
    `
})
export class AppComponent {

    name: string = "Andrei";
}