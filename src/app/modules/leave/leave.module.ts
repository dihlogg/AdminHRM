import { NgModule } from '@angular/core';
import { LeaveRoutingModule } from './leave-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { EmployeeApiServiceService } from 'src/app/core/services/employee/employee-api-service.service';
import { MyLeaveComponent } from './pages/my-leave/my-leave.component';
import { ApplyLeaveComponent } from './pages/apply-leave/apply-leave.component';
import { ListLeaveComponent } from './pages/list-leave/list-leave.component';
import { LeaveNavbarComponent } from './pages/leave-navbar/leave-navbar.component';

@NgModule({
  imports: [LeaveNavbarComponent, LeaveRoutingModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  providers: [EmployeeApiServiceService],
})

export class LeaveModule {}

