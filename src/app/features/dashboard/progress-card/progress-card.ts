import { Component, Input } from '@angular/core';

export interface ProgressCard {
  title: string;
  subtitle: string;
  status: string;
  goId: string;
  completion: number;
  businessUnit: string;
  tags: string[];
  location: string;
  planner: string;
}

@Component({
  selector: 'app-dashboard-progress-card',
  imports: [],
  templateUrl: './progress-card.html',
  styleUrl: './progress-card.scss',
})
export class DashboardProgressCard {
  @Input() project!: ProgressCard;
}
