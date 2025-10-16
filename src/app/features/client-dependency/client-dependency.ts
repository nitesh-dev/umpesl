import { Component, signal } from '@angular/core';
import { TopBar } from "../../shared/components/top-bar/top-bar";
import { Button } from "../../shared/components/ui/button/button";
import { AddIcon } from "../../shared/components/ui/icons/add-icon";
import { NotificationsIcon } from "../../shared/components/ui/icons/notifications-icon";
import { CheckBox } from "../../shared/components/ui/check-box/check-box";
import { InputComponent } from "../../shared/components/ui/input/input";
import { SearchIcon } from "../../shared/components/ui/icons/search-icon";
import { TableView } from "../../shared/components/table-view/table-view";

@Component({
  selector: 'app-client-dependency',
  imports: [TopBar, Button, AddIcon, NotificationsIcon, CheckBox, InputComponent, SearchIcon, TableView],
  templateUrl: './client-dependency.html',
  styleUrl: './client-dependency.scss'
})
export class ClientDependency {


  stats = signal({
    pending: 7,
    delayed: 3,
    progress: 5,
    completed: 15
  })

}
