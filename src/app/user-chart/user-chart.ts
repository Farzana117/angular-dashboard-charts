import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { chartData } from '../data/dashboard-data';

@Component({
  selector: 'app-user-chart',
  standalone: true,
  template: `<canvas id="userChart"></canvas>`,
})
export class UserChart implements AfterViewInit {
  ngAfterViewInit(): void {
    new Chart('userChart', {
      type: 'line',
      data: {
        labels: chartData.labels,
        datasets: [
          {
            label: 'User Growth',
            data: chartData.values,
            borderColor: '#3f51b5',
            tension: 0.3,
          },
        ],
      },
    });
  }
}
// Chart initialized after view load to ensure canvas is available
