import { Routes } from '@angular/router';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
import { NotFound } from './features/not-found/not-found';
import { Login } from './features/auth/login/login';
import { DailyProgressReport } from './features/dashboard/daily-progress-report/daily-progress-report';
import { ClientDependency } from './features/dashboard/admin/client-dependency/client-dependency';
import { Home } from './features/dashboard/home/home';
import { ProjectDashboard } from './features/dashboard/home/project-dashboard/project-dashboard';
import { SupportTicket } from './features/dashboard/help/support-ticket/support-ticket';
import { TrainingResources } from './features/dashboard/help/training-resources/training-resources';
import { Guide } from './features/dashboard/help/guide/guide';
import { AccountCentre } from './features/dashboard/account-centre/account-centre';
import { DprHistory } from './features/dashboard/dpr-history/dpr-history';
import { FieldDocuments } from './features/dashboard/field-documents/field-documents';
import { ProjectMasterSheet } from './features/dashboard/admin/project-master-sheet/project-master-sheet';
import { UsersManagement } from './features/dashboard/admin/users-management/users-management';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: Home,
      },
      { path: 'accounts', component: AccountCentre },
      {
        path: 'project/:projectId',
        component: ProjectDashboard,
      },
      {
        path: 'dpr',
        component: DailyProgressReport,
      },      {
        path: 'dpr-history',
        component: DprHistory,
      },      {
        path: 'field-docs',
        component: FieldDocuments,
      },
      {
        path: 'admin',
        children: [
          { path: 'project-master', component: ProjectMasterSheet },
          { path: 'client-dependency', component: ClientDependency },
          { path: 'users', component: UsersManagement },
        ],
      },
      {
        path: 'help',
        children: [
          {path: 'support', component: SupportTicket},
          {path: 'guide', component: Guide},
          {path: 'training', component: TrainingResources},
        ]
      }
    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: Login,
      },
    ],
  },
  { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: '**', component: NotFound },
];
