import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PimComponent } from './pim.component';
import { ListEmployeeComponent } from './pages/list-employee/list-employee.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';

const routes: Routes = [
  {
    path: '',
    component: PimComponent,
    children: [
      { path: '', redirectTo: 'list-employee', pathMatch: 'full' },
      { path: 'list-employee', component: ListEmployeeComponent},
      { path: 'add-employee', component: AddEmployeeComponent },
      { path: '**', redirectTo: 'list-employee' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
  export class PimRoutingModule {}

