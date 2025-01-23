import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveComponent } from './leave.component';
import { ApplyLeaveComponent } from './pages/apply-leave/apply-leave.component';
import { MyLeaveComponent } from './pages/my-leave/my-leave.component';
import { ListLeaveComponent } from './pages/list-leave/list-leave.component';
import { TimeOffPopupComponent } from './pages/time-off-popup/time-off-popup.component';
import { ReceiveLeaveComponent } from './pages/receive-leave/receive-leave.component';

const routes: Routes = [
    {
        path: '',
        component: LeaveComponent,
        children: [
            { path: '', redirectTo: 'list-leave', pathMatch: 'full' },
            { path: 'my-leave', component: MyLeaveComponent },
            { path: 'apply-leave', component: ApplyLeaveComponent },
            { path: 'list-leave', component: ListLeaveComponent },
            { path: 'time-off-popup', component: TimeOffPopupComponent },
            { path: 'receive-leave', component: ReceiveLeaveComponent },
            { path: '**', redirectTo: 'list-leave' },
        ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveRoutingModule { }

