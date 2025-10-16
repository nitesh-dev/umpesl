import { Component, signal } from '@angular/core';
import { TableView } from '@shared/components/table-view/table-view';
import { TopBar } from '@shared/components/top-bar/top-bar';
import { Button } from '@shared/components/ui/button/button';
import { CheckBox } from '@shared/components/ui/check-box/check-box';
import { AddIcon } from '@shared/components/ui/icons/add-icon';
import { NotificationsIcon } from '@shared/components/ui/icons/notifications-icon';
import { SearchIcon } from '@shared/components/ui/icons/search-icon';
import { InputComponent } from '@shared/components/ui/input/input';


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
