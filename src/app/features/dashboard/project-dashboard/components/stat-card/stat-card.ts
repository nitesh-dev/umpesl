import { Component, Input } from '@angular/core';

export interface Legend{
  pattern: string,
  label: string
}

@Component({
  selector: 'app-stat-card',
  imports: [],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss'
})
export class StatCard {

  @Input() title = "No title"
  @Input() legends: Legend[] = [{
    pattern: "blue-pattern",
    label: 'Hello test'
  }]


}
