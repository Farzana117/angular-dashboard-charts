import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardStats } from '../data/dashboard-data';

@Component({
  selector: 'app-summary-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-cards.html',
  styleUrls: ['./summary-cards.css'],
})
export class SummaryCards {
  stats = dashboardStats;
}
