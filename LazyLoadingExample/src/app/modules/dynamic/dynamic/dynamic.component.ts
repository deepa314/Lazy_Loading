import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { BubbleChartComponent } from '../../charts/bubble-chart/bubble-chart.component';
import { ChartDirective } from '../chart.directive';
import { PieChartComponent } from '../charts/pie-chart/pie-chart.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  @ViewChildren(ChartDirective) charHost!: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  loadBubbleComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(BubbleChartComponent);
    
    const viewContainerRef = this.charHost.toArray()[0].viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    let bubble: BubbleChartComponent = <BubbleChartComponent>componentRef.instance;
  }

  loadPieChartComponent() {
    
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(PieChartComponent);
    
    const viewContainerRef = this.charHost.toArray()[1].viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    let pie: PieChartComponent = <PieChartComponent>componentRef.instance;
  }

  ngOnInit(): void {
  }

}
