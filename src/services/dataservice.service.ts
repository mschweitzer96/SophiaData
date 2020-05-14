import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  getData(){
    return [
      {
        id: 'ECB',
        category: 'Financial News',
        title: 'Analysis of ECB Hearings',
        line_data: [{
          name: 'Financial Sentiment',
          data: [0.982902544, 0.988101136, 0.984706159, 0.985759335, 0.984866071, 0.990469604, 0.983862012, 0.988888748, 0.983578826, 0.986724815]
          },],
        pie_data:[{
          name: 'Topics',
          colorByPoint: true,
          data: [
            {
              name: 'Intros&Other',
              y: 33/119
            },
            {
              name: 'Banking Union/SSM/EMU',
              y: 24/119
            },  {
            name: 'Standard Monetary Measures',
            y: 22/199,
            sliced: true,
            selected: true
          }, 
          {
            name: 'Non-Standard Monetary Measures',
            y: 11/119
          },
          {
            name: 'Inflation&Outlook',
            y: 11/119
          },
          {
            name: 'Fiscal Policy',
            y: 9/119
          },  {
            name: 'Fiscal&Structural Reforms',
            y: 9/119
          } ]
        }]

      },
    ]
  }
}
