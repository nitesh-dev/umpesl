import { Component, Input } from '@angular/core';

export interface DprCardType {
  title: string;
  engineer: string;
  businessUnit: string;
  area: string;
  manpowerShortfall: string;
  hindranceReport: string;
  achievementRecord: string;
  status: string;
}

@Component({
  selector: 'app-dpr-kanban-card',
  imports: [],
  templateUrl: './dpr-kanban-card.html',
  styleUrl: './dpr-kanban-card.scss',
})
export class DprKanbanCard {
  @Input({ required: true }) data!: DprCardType;
}
