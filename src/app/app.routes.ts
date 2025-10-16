import { Routes } from '@angular/router';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
import { NotFound } from './features/not-found/not-found';
import { Login } from './features/auth/login/login';
import { DailyProgressReport } from './features/daily-progress-report/daily-progress-report';
import { ClientDependency } from './features/client-dependency/client-dependency';
import { Home } from './features/dashboard/home/home';
import { ProjectDashboard } from './features/dashboard/home/project-dashboard/project-dashboard';

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
      {
        path: 'project/:projectId',
        component: ProjectDashboard,
      },
      {
        path: 'dpr',
        component: DailyProgressReport,
      },
      {
        path: 'admin',
        children: [{ path: 'client-dependency', component: ClientDependency }],
      },
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
