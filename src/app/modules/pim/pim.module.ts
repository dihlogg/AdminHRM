import { NgModule } from '@angular/core';
import { PimRoutingModule } from './pim-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { EmployeeApiServiceService } from 'src/app/core/services/employee/employee-api-service.service';

@NgModule({
  imports: [PimRoutingModule, ToastModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  providers: [EmployeeApiServiceService, MessageService]
})

export class PimModule {}

