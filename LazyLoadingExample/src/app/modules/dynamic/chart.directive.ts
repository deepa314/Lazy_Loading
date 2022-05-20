import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[chartHost]'
})
export class ChartDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
