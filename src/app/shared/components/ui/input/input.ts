import { Component, Input, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss',
  encapsulation: ViewEncapsulation.None
})
export class InputComponent {
  @Input() contentDirection: 'ltr' | 'rtl' = 'ltr';
  text = signal('');
}
