import { Component } from '@angular/core';
import { Select } from '../../shared/components/ui/select/select';
import { Button } from '../../shared/components/ui/button/button';
import { AddIcon } from "../../shared/components/ui/icons/add-icon/add-icon";

interface Project {
  name: string;
  type: string;
  status: string;
  goId: string;
  completion: number;
  unit: string;
  tags: string[];
  location: string;
  planner: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [Select, Button, AddIcon],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  userName = 'Ramesh';

  stats = {
    active: 16,
    onTrack: 10,
    atRisk: 4,
    delayed: 2,
  };

  filter = {
    status: 'On Track',
    planner: 'Prakash',
    category: 'Electrical',
  };

  sortBy = 'On Track';

  projects: Project[] = [
    {
      name: 'PKG 23 - Hoogly',
      type: 'Supply & Erection',
      status: 'On Track',
      goId: 'R/870120',
      completion: 84.2,
      unit: 'Electrical',
      tags: ['Electrical works', 'Ventilation', 'Water mist', 'Lighting system', 'Fire hydrant'],
      location: 'Mumbai',
      planner: 'Naresh',
    },
    {
      name: 'PKG 24 - Surat',
      type: 'Supply & Erection',
      status: 'On Track',
      goId: 'R/870121',
      completion: 78.5,
      unit: 'Electrical',
      tags: ['Cable tray', 'Distribution board'],
      location: 'Surat',
      planner: 'Prakash',
    },
    // add more project objects as needed
  ];

  statusOptions = ['On Track', 'At Risk', 'Delayed'];
  plannerOptions = ['Prakash', 'Naresh', 'Suresh'];
  categoryOptions = ['Electrical', 'Mechanical', 'Civil'];

  applyFilters() {
    // placeholder - implement real filtering logic in your real project
    // kept intentionally simple to match "component file only" brief
    console.log('Applying filters', this.filter);
  }

  clearFilters() {
    this.filter = { status: 'On Track', planner: 'Prakash', category: 'Electrical' };
  }
}
