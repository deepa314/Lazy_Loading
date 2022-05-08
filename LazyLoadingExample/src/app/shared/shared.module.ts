import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHAREDINJECTIBLES } from './share-injectibles';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [...SHAREDINJECTIBLES]
})
export class SharedModule { }
