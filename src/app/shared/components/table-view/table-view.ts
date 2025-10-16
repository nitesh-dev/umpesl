import { Component, Input, signal } from '@angular/core';

export interface TableColumn {
  key: string;
  label: string;
  type?: 'text' | 'dropdown' | 'status' | 'action' | 'date';
}

export interface TableRow {
  [key: string]: any;
}

@Component({
  selector: 'app-table-view',
  imports: [],
  templateUrl: './table-view.html',
  styleUrl: './table-view.scss',
})
export class TableView {
  @Input() theme: 'normal' | 'compact' = 'normal';
  @Input() columns: TableColumn[] = [
    { key: 'projectName', label: 'Project name' },
    { key: 'goId', label: 'GO ID' },
    { key: 'pmName', label: 'PM Name' },
    { key: 'plannerName', label: 'Planner name' },
    { key: 'completionDate', label: 'Contractual Compl. Date' },
    { key: 'pendingOrders', label: 'Total Pending orders (Cr.) as on dd-mm-yy' },
  ];
  @Input() data: TableRow[] = [
    {
      id: 1,
      projectName: 'Dropdown menu - Auto',
      goId: 'Select',
      pmName: 'Autoselect',
      plannerName: 'Autoselect',
      completionDate: 'Manual Entry',
      pendingOrders: 'Manual Entry',
    },
    {
      id: 2,
      projectName: 'Dropdown menu - Auto',
      goId: 'Select',
      pmName: 'Autoselect',
      plannerName: 'Autoselect',
      completionDate: 'Manual Entry',
      pendingOrders: 'Manual Entry',
    },
    {
      id: 3,
      projectName: 'Dropdown menu - Auto',
      goId: 'Select',
      pmName: 'Autoselect',
      plannerName: 'Autoselect',
      completionDate: 'Manual Entry',
      pendingOrders: 'Manual Entry',
    },
  ];

}
