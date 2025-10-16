import { Component, Input, signal, ViewEncapsulation } from '@angular/core';

import {
  RdxCheckboxButtonDirective,
  RdxCheckboxIndicatorDirective,
  RdxCheckboxInputDirective,
  RdxCheckboxRootDirective,
} from '@radix-ng/primitives/checkbox';
import { CheckIcon } from "../icons/check-icon";

@Component({
  selector: 'app-check-box',
  imports: [
    RdxCheckboxButtonDirective,
    RdxCheckboxIndicatorDirective,
    RdxCheckboxInputDirective,
    RdxCheckboxRootDirective,
    CheckIcon
],
  templateUrl: './check-box.html',
  styleUrl: './check-box.scss',
  encapsulation: ViewEncapsulation.None
})
export class CheckBox {

  @Input() id = '';
  @Input() label = '';
  checked = signal(false);
}
