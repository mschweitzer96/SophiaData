import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './widgets/line/line.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HighchartsChartModule } from 'highcharts-angular';
import { RouterModule } from '@angular/router';
import { PieComponent } from './widgets/pie/pie.component';



@NgModule({
  declarations: [LineComponent, PieComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HighchartsChartModule,
    RouterModule
  ],
  exports:[
    LineComponent,
    PieComponent
  ]
})
export class SharedModule { }
