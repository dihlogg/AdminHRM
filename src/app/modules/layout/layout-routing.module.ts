import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { PimComponent } from '../pim/pim.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'pim',
    component: LayoutComponent,
    loadChildren: () => import('../pim/pim.module').then((m) => m.PimModule),
  },
  {
    path: 'leave',
    component: LayoutComponent,
    loadChildren: () => import('../leave/leave.module').then((m) => m.LeaveModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
