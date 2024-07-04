/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeApiServiceService } from './employee-api-service.service';

describe('Service: EmployeeApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeApiServiceService]
    });
  });

  it('should ...', inject([EmployeeApiServiceService], (service: EmployeeApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
