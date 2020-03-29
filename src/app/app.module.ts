import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./components/app.component";
import { AppComponent2 } from "./components/app.component2";
import { AppComponent3 } from "./components/app.component3";
import { AppComponent4 } from "./components/app.component4";
import { AppComponent5 } from "./components/app.component5";
import { AppComponent6 } from "./components/app.component6";

@NgModule({
    imports:        [ BrowserModule, FormsModule ], // set of another modules are used in current module
    // set of view classes of current module (There are three type of view classes in Angular: components, directives, pipes)
    declarations:   [ AppComponent, AppComponent2, AppComponent3, AppComponent4, AppComponent5, AppComponent6 ],
    // root component(s) (run(s) by default when this app starts running)
    bootstrap:      [ AppComponent, AppComponent2, AppComponent3, AppComponent4, AppComponent5, AppComponent6 ],
    exports: [], // set of view classes which will be use
    providers: [] // set of classes which create services for current module
})

export class AppModule { }