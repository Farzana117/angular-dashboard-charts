import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { users } from '../data/dashboard-data';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-table.html',
})
export class UserTable {
  users = users;
}
