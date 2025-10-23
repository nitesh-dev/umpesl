import { Component } from '@angular/core';
import { ProjectCompletionChart } from '@shared/components/charts/project-completion-chart/project-completion-chart';
import { InstallationProgressChart } from '@shared/components/charts/installation-progress-chart/installation-progress-chart';
import { TopBar } from '@shared/components/top-bar/top-bar';
import { Button } from '@shared/components/ui/button/button';
import { AddIcon } from '@shared/components/ui/icons/add-icon';
import { NotificationsIcon } from '@shared/components/ui/icons/notifications-icon';
import { ProjectOverallProgressChart } from '@shared/components/charts/project-overall-progress-chart/project-overall-progress-chart';
import { FinancialTurnoverChart } from '@shared/components/charts/financial-turnover-chart/financial-turnover-chart';
import { ProcurementStatusChart } from '@shared/components/charts/procurement-status-chart/procurement-status-chart';
import { Legend, StatCard } from './components/stat-card/stat-card';
import { ManpowerStatusChart } from '@shared/components/charts/manpower-status-chart/manpower-status-chart';
import { CommissionHotoStatusChart } from '@shared/components/charts/commission-hoto-status-chart/commission-hoto-status-chart';
import { EngineeringStatusChart } from '@shared/components/charts/engineering-status-chart/engineering-status-chart';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-dashboard',
  imports: [
    InstallationProgressChart,
    TopBar,
    Button,
    AddIcon,
    NotificationsIcon,
    ProjectOverallProgressChart,
    FinancialTurnoverChart,
    ProcurementStatusChart,
    StatCard,
    ManpowerStatusChart,
    CommissionHotoStatusChart,
    EngineeringStatusChart,
    RouterLink
  ],
  templateUrl: './project-dashboard.html',
  styleUrl: './project-dashboard.scss',
})
export class ProjectDashboard {

  constructor(private router: Router, private route: ActivatedRoute) {}
  safety = { closed: 5, open: 0 };
  quality = { closed: 0, open: 5 };
  pendingDPR = 2;
  originalTO = 87.33;
  currentTO = 90.94;

  installationLegends: Legend[] = [
    {
      pattern: 'dark-light-blue-pattern',
      label: 'Cumulative Planned vs Actual',
    },
    {
      pattern: 'brown-yellow-pattern',
      label: 'Current Month Planned vs Actual %',
    },
    { pattern: 'pink-pattern', label: 'Shortfall' },
  ];

  financialTurnoverLegends: Legend[] = [
    {
      pattern: 'dark-light-blue-pattern',
      label: 'Planned vs Actual',
    },
    {
      pattern: 'brown-pattern',
      label: 'Cumulative Turnover Realised',
    },
  ];

  procurementStatusLegends: Legend[] = [
    {
      pattern: 'dark-light-blue-pattern',
      label: 'Cumulative Planned vs Actual %',
    },
    {
      pattern: 'brown-yellow-pattern',
      label: 'Total PO Planned vs Actual%',
    },
  ];

  commissionStatusLegends: Legend[] = [
    {
      pattern: 'dark-light-blue-pattern',
      label: 'Cumulative Planned vs Actual %',
    },
    { pattern: 'pink-pattern', label: 'Shortfall' },
    {
      pattern: 'brown-yellow-pattern',
      label: 'Total Planned vs Actual%',
    },
  ];

  engineeringStatusLegends: Legend[] = [
    {
      pattern: 'dark-blue-pattern',
      label: 'Cumulative Submission Planned',
    },
    { pattern: 'light-blue-pattern', label: 'Cumulative Submitted' },
    {
      pattern: 'brown-pattern',
      label: 'Approved',
    },
  ];



  onAddStatus(){
    // alert("hi")
    this.router.navigate(['add-status'], {relativeTo: this.route})
  }
}
