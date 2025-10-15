import { Routes } from '@angular/router';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
import { NotFound } from './features/not-found/not-found';
import { Dashboard } from './features/dashboard/dashboard';

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
    ],
  },
  { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: '**', component: NotFound },
];
