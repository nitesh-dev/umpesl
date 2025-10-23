import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AssignmentIcon } from "@shared/components/ui/icons/assignment-icon";
import { NoteStackIcon } from "@shared/components/ui/icons/note-stack-icon";

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
  imports: [AssignmentIcon, NoteStackIcon, RouterLink],
  templateUrl: './progress-card.html',
  styleUrl: './progress-card.scss',
  encapsulation: ViewEncapsulation.None
})
export class DashboardProgressCard {
  @Input() project!: ProgressCard;
}
