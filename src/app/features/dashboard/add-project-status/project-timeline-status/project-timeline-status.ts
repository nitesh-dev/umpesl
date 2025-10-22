import { Component } from '@angular/core';
import { Card } from '../components/card/card';
import { TableView } from '@shared/components/table-view/table-view';

@Component({
  selector: 'app-project-timeline-status',
  imports: [Card, TableView],
  template: `
    <app-card title="Project Timeline Status">
        <span class="table-title">To Status</span>
        <app-table-view theme="compact" />
        <span class="table-title">To Status</span>
        <app-table-view theme="compact" />
    </app-card>
  `,
  styles: ``,
})
export class ProjectTimelineStatus {}
