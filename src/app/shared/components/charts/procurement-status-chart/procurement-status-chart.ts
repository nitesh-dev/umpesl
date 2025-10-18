import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartType, ChartData, ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-procurement-status-chart',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './procurement-status-chart.html',
  styleUrl: './procurement-status-chart.scss',
})
export class ProcurementStatusChart {
  public chartType: ChartType = 'bar';

  public chartData: ChartData<'bar'> = {
    labels: ['MR Status', 'PO Status'],
    datasets: [
      {
        label: 'MR Planned',
        data: [100, null],
        backgroundColor: '#0f3b6d',
        barThickness: 40,
        
      },
      {
        label: 'MR Actual',
        data: [100, null],
        backgroundColor: '#60a5fa',
        barThickness: 40,
      },
      {
        label: 'PO Planned',
        data: [null, 100],
        backgroundColor: '#9a3412',
        barThickness: 40,
      },
      {
        label: 'PO Actual',
        data: [null, 80],
        backgroundColor: '#facc15',
        barThickness: 40,
      },
    ],
  };

  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
      // annotation: {
      //   annotations: {
      //     label1: {
      //       type: 'label',
      //       xValue: 0,
      //       yValue: 100,
      //       content: ['Total MR: 100%'],
      //       color: '#111827',
      //       font: {
      //         size: 12,
      //         weight: 'bold',
      //       },
      //       position: {
      //         x: 'center',
      //         y: 'top',
      //       },
      //     },
      //   },
      // },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          
          color: '#111827',
          font: { size: 13 },
          display: false
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
