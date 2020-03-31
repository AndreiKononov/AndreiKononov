import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <div>
            <h1>AppModule</h1>
            <data-comp></data-comp> <!-- We use component from another module -->
        </div>
    `
})

export class AppComponent { }

