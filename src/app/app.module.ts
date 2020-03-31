import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DataModule } from "./data/data.module";

@NgModule({
    imports:        [ BrowserModule, DataModule ], // set of another modules are used in current module
    declarations:   [ AppComponent ], // set of view classes of current module (There are three type of view classes in Angular: components, directives, pipes)
    bootstrap:      [ AppComponent ], //root component (runs by default when this app starts running)
    exports:        [], // set of view classes which will be use
    providers:      [] // set of classes which create services for current module
})

export class AppModule { }