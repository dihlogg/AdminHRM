import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthenticationApiServiceService } from 'src/app/core/services/authentication/authentication-api-service.service';

@NgModule({
  imports: [AuthRoutingModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  providers: [AuthenticationApiServiceService],
})
export class AuthModule {}
