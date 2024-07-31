/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthenticationApiServiceService } from './authentication-api-service.service';

describe('Service: AuthenticationApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationApiServiceService]
    });
  });

  it('should ...', inject([AuthenticationApiServiceService], (service: AuthenticationApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
