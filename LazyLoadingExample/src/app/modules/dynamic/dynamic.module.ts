import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic/dynamic.component';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { BubbleChartComponent } from './charts/bubble-chart/bubble-chart.component';
import { PolarChartComponent } from './charts/polar-chart/polar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ScatterChartComponent } from './charts/scatter-chart/scatter-chart.component';
import { ChartDirective } from './chart.directive';

const routes: Routes = [
  { path: 'chart', component: DynamicComponent },
]


@NgModule({
  declarations: [DynamicComponent, BubbleChartComponent, PolarChartComponent, PieChartComponent, ScatterChartComponent, ChartDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  entryComponents: [BubbleChartComponent, PieChartComponent]
})
export class DynamicModule { }
