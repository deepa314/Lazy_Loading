import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { COREINJECTIBLES } from "./core.injectibles";

@NgModule({
    imports: [CommonModule],
    providers: [...COREINJECTIBLES]
})
export class CoreModule {

}