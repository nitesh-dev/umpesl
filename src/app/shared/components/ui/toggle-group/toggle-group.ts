import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef, Type, ViewEncapsulation } from '@angular/core';

import {
  RdxToggleGroupDirective,
  RdxToggleGroupItemDirective,
} from '@radix-ng/primitives/toggle-group';
import { AddIcon } from '../icons/add-icon';
import { Select } from '../select/select';
import { EventListIcon } from '../icons/event-list-icon';
import { GridViewIcon } from '../icons/grid-view-icon';

export interface ToggleGroupItem {
  component: Type<any>;
  value: string;
}

@Component({
  selector: 'app-toggle-group',
  imports: [RdxToggleGroupDirective, RdxToggleGroupItemDirective, NgComponentOutlet],
  templateUrl: './toggle-group.html',
  styleUrl: './toggle-group.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ToggleGroup {
  @Input() items: ToggleGroupItem[] = [];

  @Input() selected: string = this.items[0]?.value || '';
}
