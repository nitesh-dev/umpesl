import { Component } from '@angular/core';
import { ProjectCompletionChart } from '@shared/components/charts/project-completion-chart/project-completion-chart';
import { InstallationProgressChart } from '@shared/components/charts/installation-progress-chart/installation-progress-chart';
import { TopBar } from '@shared/components/top-bar/top-bar';
import { Button } from '@shared/components/ui/button/button';
import { AddIcon } from '@shared/components/ui/icons/add-icon';
import { NotificationsIcon } from '@shared/components/ui/icons/notifications-icon';
import { ProjectOverallProgressChart } from "@shared/components/charts/project-overall-progress-chart/project-overall-progress-chart";
import { FinancialTurnoverChart } from "@shared/components/charts/financial-turnover-chart/financial-turnover-chart";
import { ProcurementStatusChart } from "@shared/components/charts/procurement-status-chart/procurement-status-chart";

@Component({
  selector: 'app-project-dashboard',
  imports: [
    ProjectCompletionChart,
    InstallationProgressChart,
    TopBar,
    Button,
    AddIcon,
    NotificationsIcon,
    ProjectOverallProgressChart,
    FinancialTurnoverChart,
    ProcurementStatusChart
],
  templateUrl: './project-dashboard.html',
  styleUrl: './project-dashboard.scss',
})
export class ProjectDashboard {
  safety = { closed: 5, open: 0 };
  quality = { closed: 0, open: 5 };
  pendingDPR = 2;
  originalTO = 87.33;
  currentTO = 90.94;
}
