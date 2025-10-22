import { Component } from '@angular/core';
import { TopBar } from "@shared/components/top-bar/top-bar";
import { Button } from "@shared/components/ui/button/button";
import { NotificationsIcon } from "@shared/components/ui/icons/notifications-icon";
import { NavItem, VerticalNav } from "@shared/components/vertical-nav/vertical-nav";
import { UploadFileIcon } from "@shared/components/ui/icons/upload-file-icon";
import { Card } from "./components/card/card";
import { ProjectTimelineStatus } from "./project-timeline-status/project-timeline-status";

@Component({
  selector: 'app-add-project-status',
  imports: [TopBar, Button, NotificationsIcon, VerticalNav, UploadFileIcon, Card, ProjectTimelineStatus],
  templateUrl: './add-project-status.html',
  styleUrl: './add-project-status.scss'
})
export class AddProjectStatus {

  items: NavItem[] = [
    { key: 'project-timeline-status', value: 'Project Timeline Status' },
    { key: 'financial-status', value: 'Financial Status' },
    { key: 'engineering-status', value: 'Engineering Status' },
    { key: 'procurement-status', value: 'Procurement Status' },
    { key: 'safety-quality-update', value: 'Safety & Quality Update' },
    { key: 'claims-report', value: 'Claims Report' },
    { key: 'hindrance-report', value: 'Hindrance Report' },
    { key: 'subcontractor-status', value: 'Subcontractor Status' },
    { key: 'manpower-augmentation-plan', value: 'Manpower Augmentation Plan' },
    { key: 'commissioning-status', value: 'Commissioning Status' },
    { key: 'snag-status', value: 'Snag Status' },
    { key: 'hoto-status', value: 'HOTO Status' },
    { key: 'customer-complaint-status', value: 'Customer Complaint Status' },
    { key: 'client-dependencies', value: 'Client Dependencies' },
    { key: 'cashflow-report', value: 'Cashflow Report' },
  ];


}
