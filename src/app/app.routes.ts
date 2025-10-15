import { Routes } from '@angular/router';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
import { NotFound } from './features/not-found/not-found';
import { Dashboard } from './features/dashboard/dashboard';
import { Login } from './features/auth/login/login';
import { DailyProgressReport } from './features/daily-progress-report/daily-progress-report';

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
        component: Dashboard,
      },
      {
        path: 'dpr',
        component: DailyProgressReport
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
