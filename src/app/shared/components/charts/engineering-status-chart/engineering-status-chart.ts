import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartType, ChartData, ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-engineering-status-chart',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './engineering-status-chart.html',
  styleUrl: './engineering-status-chart.scss'
})
export class EngineeringStatusChart {

   public chartType: ChartType = 'bar';
  
    public chartData: ChartData<'bar'> = {
      labels: ['Cumulative Submission Planned', 'Cumulative Submitted', 'Approved'],
      datasets: [
        {
          label: 'Planned',
          data: [100, null, null],
          backgroundColor: '#0f3b6d',
          
        },
        {
          label: 'Submitted',
          data: [null, 100, null],
          backgroundColor: '#60a5fa',
        },
        {
          label: 'Approved',
          data: [null, null, 100],
          backgroundColor: '#9a3412',
        }
      ],
    };
  
    public chartOptions: ChartConfiguration['options'] = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            
            color: '#111827',
            font: { size: 13 },
            display: false,
            

            // align: 'center',
            // labelOffset: -50,
          },
          
        },
        y: {
          beginAtZero: true,
          grid: { color: '#f3f4f6', display: false },
          ticks: { color: '#6b7280', display: false, font: { size: 12 } },
        },
      },
    };

}
