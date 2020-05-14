import { Component, OnInit } from '@angular/core';
import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';
import { DataserviceService } from 'src/services/dataservice.service';

@Component({
  selector: 'app-widget-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  chartOptions: {};
  Highcharts = Highcharts;
  public data = [];

  constructor(private _dataService: DataserviceService) { }

  ngOnInit() {

    this.data = this._dataService.getData();
      
    const data = this.data;

    HC_exporting(Highcharts);
    this.chartOptions = {

      title: {
        text: 'Financial Sentiment in ECB Hearings'
    },

    subtitle: {
        text: 'Source: www.ecb.europa.eu'
    },

    yAxis: {
        title: {
            text: 'Financial Sentiment'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },
    series: data.find(data => data.id === 'ECB').line_data,




    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    },
    
    

    }
  }
}