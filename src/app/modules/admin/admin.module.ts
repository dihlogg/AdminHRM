import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { EmployeeApiServiceService } from 'src/app/core/services/employee/employee-api-service.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [AdminRoutingModule, ToastModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  providers: [EmployeeApiServiceService, MessageService]
})

export class AdminModule {}