import { Component } from '@angular/core';

import {
  RdxSelectComponent,
  RdxSelectContentDirective,
  RdxSelectGroupDirective,
  RdxSelectIconDirective,
  RdxSelectItemDirective,
  RdxSelectItemIndicatorDirective,
  RdxSelectLabelDirective,
  RdxSelectSeparatorDirective,
  RdxSelectTriggerDirective,
  RdxSelectValueDirective,
} from '@radix-ng/primitives/select';

@Component({
  selector: 'app-select',
  imports: [
    RdxSelectComponent,
    RdxSelectContentDirective,
    RdxSelectGroupDirective,
    RdxSelectIconDirective,
    RdxSelectItemDirective,
    RdxSelectItemIndicatorDirective,
    RdxSelectLabelDirective,
    RdxSelectSeparatorDirective,
    RdxSelectTriggerDirective,
    RdxSelectValueDirective,
  ],
  templateUrl: './select.html',
  styleUrl: './select.scss',
})
export class Select {

  placeholder = 'Select an option';
  readonly items: SelectItem[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana', disabled: true },
    { value: 'blueberry', label: 'Blueberry' },
    { value: 'grapes', label: 'Grapes' },
    { value: 'pineapple', label: 'Pineapple' },
  ];
}

export type SelectItem = {
  value: string;
  label: string;
  disabled?: boolean;
};
