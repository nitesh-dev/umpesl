import { Component, Input, signal, ViewEncapsulation } from '@angular/core';

import {
  RdxCheckboxButtonDirective,
  RdxCheckboxIndicatorDirective,
  RdxCheckboxInputDirective,
  RdxCheckboxRootDirective,
  
} from '@radix-ng/primitives/checkbox';
import { CheckboxUncheckedIcon } from "../icons/checkbox-unchecked-icon";
import {CheckboxCheckedIcon} from "../icons/checkbox-checked-icon"

@Component({
  selector: 'app-check-box',
  imports: [
    RdxCheckboxButtonDirective,
    RdxCheckboxIndicatorDirective,
    RdxCheckboxInputDirective,
    RdxCheckboxRootDirective,
    CheckboxCheckedIcon,
    CheckboxUncheckedIcon
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
