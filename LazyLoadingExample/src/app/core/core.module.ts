import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Auth1Service } from "./services/auth1.service";

@NgModule({
    imports: [CommonModule],
    providers: [Auth1Service]
})
export class CoreModule {

}