import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartType, ChartData, ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-installation-progress-chart',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './installation-progress-chart.html',
  styleUrl: './installation-progress-chart.scss',
})
export class InstallationProgressChart {
  public chartType: ChartType = 'bar';

  public chartData: ChartData<'bar'> = {
    labels: ['Cumulative', 'Current Month'],
    datasets: [
      // ===== Cumulative Group =====
      {
        label: 'Cumulative Planned',
        data: [100, null],
        barThickness: 40,
        stack: 'cumulative-planned',
        backgroundColor: '#0f3b6d',
      },
      {
        label: 'Cumulative Actual',
        data: [80, null],
        backgroundColor: '#60a5fa',
        barThickness: 40,
        stack: 'cumulative-actual',
      },
      {
        label: 'Shortfall',
        data: [20, null],
        barThickness: 40,
        stack: 'cumulative-actual',
        backgroundColor: (context) => {
          const chart = context.chart.ctx;
          const gradient = chart.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(255,182,193,0.8)');
          gradient.addColorStop(1, 'rgba(255,182,193,0.2)');
          return gradient;
        },
      },

      // ===== Current Month Group =====
      {
        label: 'Current Month Planned',
        data: [null, 100],
        backgroundColor: '#9a3412',
        barThickness: 40,
        stack: 'planned-month',
      },
      {
        label: 'Current Month Actual',
        data: [null, 80],
        backgroundColor: '#facc15',
        barThickness: 40,
        stack: 'actual-month',
      },
      {
        label: 'Shortfall',
        data: [null, 20],
        barThickness: 40,
        stack: 'actual-month',
        backgroundColor: (context) => {
          const chart = context.chart.ctx;
          const gradient = chart.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(255,182,193,0.8)');
          gradient.addColorStop(1, 'rgba(255,182,193,0.2)');
          return gradient;
        },
      },
    ],
  };

  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true, // ✅ enable vertical stacking
        grid: { display: false },
        ticks: { color: '#6b7280', display: false },
      },
      y: {
        stacked: true, // ✅ enable vertical stacking
        grid: { color: '#f3f4f6', display: false },
        ticks: { color: '#6b7280', stepSize: 20, display: false },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          color: '#374151',
          boxWidth: 12,
          font: { size: 12 },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: ${ctx.formattedValue}%`,
        },
      },
    },
  };
}
