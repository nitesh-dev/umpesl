import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity',
  imports: [],
  templateUrl: './activity.html',
  styleUrl: './activity.scss'
})
export class Activity {

  @Input() title = "No title"

}
