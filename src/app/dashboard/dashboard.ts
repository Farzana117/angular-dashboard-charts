import { Component } from '@angular/core';
import { SummaryCards } from '../summary-cards/summary-cards';
import { UserChart } from '../user-chart/user-chart';
import { UserTable } from '../user-table/user-table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SummaryCards, UserChart, UserTable],
  templateUrl: './dashboard.html',
})
export class Dashboard {}
