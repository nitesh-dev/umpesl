import { Component } from '@angular/core';
import { TopBar } from "@shared/components/top-bar/top-bar";
import { Button } from "@shared/components/ui/button/button";
import { NotificationsIcon } from "@shared/components/ui/icons/notifications-icon";
import { DownloadIcon } from "@shared/components/ui/icons/download-icon";
import { Activity } from "./components/activity/activity";
import { TableWithFilter } from "./components/table-with-filter/table-with-filter";

@Component({
  selector: 'app-dpr-report',
  imports: [TopBar, Button, NotificationsIcon, DownloadIcon, Activity, TableWithFilter],
  templateUrl: './dpr-report.html',
  styleUrl: './dpr-report.scss'
})
export class DprReport {

}
