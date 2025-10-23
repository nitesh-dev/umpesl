import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

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
  imports: [RouterLink],
  templateUrl: './dpr-kanban-card.html',
  styleUrl: './dpr-kanban-card.scss',
})
export class DprKanbanCard {
  @Input({ required: true }) data!: DprCardType;
}
