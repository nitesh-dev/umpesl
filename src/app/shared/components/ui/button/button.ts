import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  encapsulation: ViewEncapsulation.None
})
export class Button {


  /** Visual style variant */
  @Input() variant: 'solid' | 'outline' | 'ghost' | 'ghost-dark' = 'solid';

  /** Color can be a theme keyword or any valid CSS color */
  @Input() color: 'primary' = 'primary';

  /** Disable button */
  @Input() disabled = false;

  /** Button type */
  @Input() type: 'button' | 'submit' = 'button';

  @Input() fullWidth = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';


  /** Emits click event */
  @Output() pressed = new EventEmitter<void>();


  handleClick(): void {
    if (!this.disabled) this.pressed.emit();
  }

}
