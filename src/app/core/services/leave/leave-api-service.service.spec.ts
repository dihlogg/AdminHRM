/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeaveApiServiceService } from './leave-api-service.service';

describe('Service: LeaveApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveApiServiceService]
    });
  });

  it('should ...', inject([LeaveApiServiceService], (service: LeaveApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
