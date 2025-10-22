import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Button } from "@shared/components/ui/button/button";
import { UploadFileIcon } from "@shared/components/ui/icons/upload-file-icon";

@Component({
  selector: 'app-card',
  imports: [Button, UploadFileIcon],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  encapsulation: ViewEncapsulation.None
})
export class Card {

  @Input() title = "No title"

}
