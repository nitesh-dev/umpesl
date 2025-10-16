import { Component, signal } from '@angular/core';
import {
  DprCardType,
  DprKanbanCard,
} from '../../../features/dashboard/daily-progress-report/dpr-kanban-card/dpr-kanban-card';

@Component({
  selector: 'app-kanban-board',
  imports: [DprKanbanCard],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.scss',
})
export class KanbanBoard {
  items = signal<DprCardType[]>([
    {
      title: 'DPR 2025-552',
      engineer: 'Suresh Yadav',
      businessUnit: 'Electrical',
      area: 'LHS Tunnel',
      manpowerShortfall: '2',
      hindranceReport: 'N/A',
      achievementRecord: 'N/A',
      status: 'In Progress',
    },
    {
      title: 'DPR 2025-553',
      engineer: 'Suresh Yadav',
      businessUnit: 'Electrical',
      area: 'RHS Tunnel',
      manpowerShortfall: '3',
      hindranceReport: 'N/A',
      achievementRecord: 'N/A',
      status: 'In Progress',
    },
  ]);
}
