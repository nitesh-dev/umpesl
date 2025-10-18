import { Component } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'app-project-completion-chart',
  imports: [NgxEchartsModule],
  template: `
    <div class="chart-container">
      <div echarts [options]="chartOption" class="chart"></div>

      <div class="footer">
        <p class="note"><strong>Total Pending Orders (Cr):</strong> 30.83 on 30 Aug 2025</p>
      </div>
    </div>
  `,
  styles: `
  .chart-container {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  padding: 16px 20px;
  display: flex;
  flex-direction: column;

  .chart {
    height: 280px;
    width: 100%;
  }

  .footer {
    margin-top: 8px;
    font-size: 13px;
    color: #4b5563;
    text-align: right;

    strong {
      color: #111827;
    }
  }
}

  `,
})
export class ProjectCompletionChart {
  chartOption: EChartsOption = {
    title: {
      text: 'PROJECT COMPLETION & EOT STATUS',
      left: '2%',
      top: 0,
      textStyle: { fontSize: 13, fontWeight: 600, color: '#111827' },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
    },
    legend: {
      bottom: 0,
      data: [
        'Contractual completion date',
        'Estimated completion date',
        'EOT Applied Till Date',
        'EOT Approved Till Date',
      ],
      textStyle: { fontSize: 12 },
    },
    grid: { top: 40, left: 50, right: 30, bottom: 60 },
    xAxis: {
      type: 'category',
      data: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      axisLabel: { color: '#6b7280' },
      axisLine: { lineStyle: { color: '#e5e7eb' } },
      splitLine: { show: false },
    },
    yAxis: { show: false },
    series: [
      {
        name: 'Contractual completion date',
        type: 'bar',
        stack: 'total',
        barWidth: 15,
        data: [60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0],
        itemStyle: { color: '#60a5fa' },
      },
      {
        name: 'Estimated completion date',
        type: 'bar',
        stack: 'total',
        barWidth: 15,
        data: [0, 0, 0, 40, 40, 0, 0, 0, 0, 0, 0],
        itemStyle: { color: '#fbbf24' },
      },
      {
        name: 'EOT Applied Till Date',
        type: 'bar',
        stack: 'total',
        barWidth: 15,
        data: [0, 0, 0, 0, 0, 20, 20, 0, 0, 0, 0],
        itemStyle: { color: '#f97316' },
      },
      {
        name: 'EOT Approved Till Date',
        type: 'bar',
        stack: 'total',
        barWidth: 15,
        data: [0, 0, 0, 0, 0, 0, 0, 20, 20, 0, 0],
        itemStyle: { color: '#22c55e' },
      },
      {
        // Milestone markers (Today, Contractual, EOT)
        name: 'Milestones',
        type: 'scatter',
        symbolSize: 14,
        data: [
          { value: ['Oct', 1], name: 'Today, 03 Sep 2025', itemStyle: { color: '#2563eb' } },
          { value: ['Dec', 1], name: '31 Dec 2025', itemStyle: { color: '#f59e0b' } },
          { value: ['Feb', 1], name: '26 Feb 2026', itemStyle: { color: '#dc2626' } },
        ],
        tooltip: {
          formatter: (p: any) => `<b>${p.data.name}</b>`,
        },
        z: 10,
      },
    ],
  };
}
