import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { LineChartComponent } from './line-chart/line-chart.component';
// import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadaChartComponent } from './rada-chart/rada-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
// import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';



const routes: Routes = [
  { path: 'chartjs', component: ChartjsComponent },
]

@NgModule({
  declarations: [ChartjsComponent, LineChartComponent, BarChartComponent, DoughnutChartComponent, RadaChartComponent, PolarAreaChartComponent, BubbleChartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule
  ]
})
export class ChartsDemoModule { }
