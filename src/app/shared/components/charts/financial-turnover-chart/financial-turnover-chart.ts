import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-financial-turnover-chart',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './financial-turnover-chart.html',
  styleUrl: './financial-turnover-chart.scss',
})
export class FinancialTurnoverChart {
  public chartType: ChartType = 'bar';

  public chartData: ChartData<'bar' | 'line'> = {
    labels: ['May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        type: 'bar',
        label: 'Planned',
        data: [120, 80, 100, 60],
        backgroundColor: '#0f3b6d',
        barThickness: 30,
        order: 2,
      },
      {
        type: 'bar',
        label: 'Actual',
        data: [110, 70, 90, 55],
        backgroundColor: '#60a5fa',
        barThickness: 30,
        order: 3,
      },
      {
        type: 'line',
        label: 'Cumulative Turnover Realised',
        data: [110, 70, 90, 55],
        borderColor: '#9a3412',
        backgroundColor: '#9a3412',
        borderWidth: 2,
        tension: 0,
        fill: false,
        yAxisID: 'y',
        pointRadius: 5,
        pointBorderWidth: 1.5,
        pointBorderColor: '#9a3412',
        pointBackgroundColor: '#ffffff00',
        order: 1,
      },
    ],
  };

  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#374151', font: { size: 12 } },
      },
      y: {
        grid: { color: '#f3f4f6', display: false },
        ticks: { color: '#6b7280', display: false, font: { size: 11 } },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: '#111827',
        titleFont: { size: 12 },
        bodyFont: { size: 12 },
        padding: 8,
      },
    },
  };
}
