import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChartType, ChartData, ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-manpower-status-chart',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './manpower-status-chart.html',
  styleUrl: './manpower-status-chart.scss',
})
export class ManpowerStatusChart implements AfterViewInit {
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  ngAfterViewInit(): void {
    const chart = this.chart.chart;
    if (!chart) return;
    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, chart.chartArea.bottom);
    gradient.addColorStop(0, 'rgba(180, 83, 9, 0.50)');
    gradient.addColorStop(1, 'rgba(180, 83, 9, 0.05)');
    chart.data.datasets[0].backgroundColor = gradient;
    chart.update();
  }

  public chartType: ChartType = 'line';

  public chartData: ChartData<'line'> = {
    labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        label: 'Manpower',
        data: [78, 75, 77, 74, 78, 76, 77],
        borderColor: '#B45309',
        borderWidth: 4,
        pointRadius: 0,
        fill: true,
        backgroundColor: 'rgba(154, 52, 18, 0.25)',
        tension: 0,
      },
    ],
  };

  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: true },
        ticks: { color: '#6b7280', display: false, font: { size: 12 } },
      },
      y: {
        grid: { color: '#f3f4f6', display: false },
        ticks: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    elements: {
      line: {
        tension: 0.3,
      },
    },
  };
}
