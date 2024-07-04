import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PimComponent } from './pim.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: PimComponent,
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PimRoutingModule {}

