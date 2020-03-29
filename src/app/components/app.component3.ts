import { Component} from '@angular/core';

@Component({
    selector: 'my-app3', //Binding to attribute of HTML-element
    template: `<table border="1">
                   <tr><td [attr.colspan]="colspan">One-Two</td></tr>
                   <tr><td>Three</td><td>Four</td><td>4.5</td></tr>
                   <tr><td>Five</td><td>Six</td></tr>
                   <tr><td>Seven</td><td>8</td></tr>
               </table>`
})
export class AppComponent3{
    colspan: number = 3;
}