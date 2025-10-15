import { Component } from '@angular/core';
import { TopBar } from '../../shared/components/top-bar/top-bar';
import { Button } from '../../shared/components/ui/button/button';
import { NotificationsIcon } from '../../shared/components/ui/icons/notifications-icon';
import { AddIcon } from '../../shared/components/ui/icons/add-icon';
import { Select } from '../../shared/components/ui/select/select';
import { InputComponent } from '../../shared/components/ui/input/input';
import { SearchIcon } from '../../shared/components/ui/icons/search-icon';
import { ToggleGroup, ToggleGroupItem } from "../../shared/components/ui/toggle-group/toggle-group";
import { EventListIcon } from '../../shared/components/ui/icons/event-list-icon';
import { GridViewIcon } from '../../shared/components/ui/icons/grid-view-icon';
import { KanbanBoard } from "../../shared/components/kanban-board/kanban-board";

@Component({
  selector: 'app-daily-progress-report',
  imports: [TopBar, Button, NotificationsIcon, AddIcon, Select, InputComponent, SearchIcon, ToggleGroup, KanbanBoard],
  templateUrl: './daily-progress-report.html',
  styleUrl: './daily-progress-report.scss',
})
export class DailyProgressReport {
  filter = {
    status: 'On Track',
    planner: 'Prakash',
    category: 'Electrical',
  };

  sortBy = 'On Track';

  applyFilters() {
    // placeholder - implement real filtering logic in your real project
    // kept intentionally simple to match "component file only" brief
    console.log('Applying filters', this.filter);
  }

  clearFilters() {
    this.filter = { status: 'On Track', planner: 'Prakash', category: 'Electrical' };
  }


  viewOptions: ToggleGroupItem[] = [
      {
        component: GridViewIcon,
        value: 'grid',
      },
      {
        component: EventListIcon,
        value: 'list',
      },
    ];
}
