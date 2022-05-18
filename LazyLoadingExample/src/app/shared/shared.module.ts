import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPreloadStrategy } from './preload/custom-preload';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CustomPreloadStrategy]
})
export class SharedModule { }
