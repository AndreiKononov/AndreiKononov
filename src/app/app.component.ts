import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'] // styles applies to current component only. Selector "host" is linked to element in which component is hosted (element <my-app>, in this case)
})

export class AppComponent { }
