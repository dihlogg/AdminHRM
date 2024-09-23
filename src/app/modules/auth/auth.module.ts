import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { AuthenticationApiServiceService } from 'src/app/core/services/authentication/authentication-api-service.service';

@NgModule({
  imports: [AuthRoutingModule, CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  providers: [AuthenticationApiServiceService],
})
export class AuthModule {}
