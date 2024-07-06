import { NgModule } from '@angular/core';
import { PimRoutingModule } from './pim-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { EmployeeApiServiceService } from 'src/app/core/services/employee/employee-api-service.service';

@NgModule({
  imports: [PimRoutingModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  providers: [EmployeeApiServiceService],
})

export class PimModule {}

