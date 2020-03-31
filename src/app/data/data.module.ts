import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DataComponent } from "./data.component";

@NgModule({
    imports:        [ BrowserModule, FormsModule], // set of another modules are used in current module
    declarations:   [ DataComponent ], // set of view classes of current module (There are three type of view classes in Angular: components, directives, pipes)
    // bootstrap:      [ DataComponent ], //root component (runs by default when this app starts running)
    exports:        [ DataComponent ], // set of view classes which will be use in another modules
    providers:      [] // set of classes which create services for current module
})

export class DataModule { }