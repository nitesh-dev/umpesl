import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KeyboardArrowLeftIcon } from "../ui/icons/keyboard-arrow-left-icon";

@Component({
  selector: 'app-top-bar',
  imports: [RouterLink, KeyboardArrowLeftIcon],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss',
  encapsulation: ViewEncapsulation.None
})
export class TopBar {
  @Input() title: string = 'Dashboard';

  @Input() bottomBar = false
}
