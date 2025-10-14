import { Routes } from '@angular/router';
import { Test } from './features/test/test';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';

export const routes: Routes = [{ 
    path: 'dashboard', 
    component: DashboardLayout,
    children: [{
        path: '',
        component: Test
    }]
}];
