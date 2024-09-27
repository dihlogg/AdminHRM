import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagedResult } from '../../models/paged-result.model';
import { Employee } from '../../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiServiceService {

  readonly employeeApiUrl = 'http://localhost:5194/Employee/';

  readonly unitApiUrl = 'http://localhost:5194/SubUnit/';

  constructor(private http: HttpClient) { }

  // Employee
  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.employeeApiUrl + 'GetEmployees');
  }

  postEmployee(employee: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.employeeApiUrl + 'PostEmployee', employee, httpOptions);
  }

  putEmployee(employee: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.employeeApiUrl + 'PutEmployee', employee, httpOptions);
  }

  deleteEmployee(employeeId: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<any>(this.employeeApiUrl + 'DeleteEmployee/' + employeeId, httpOptions);
  }
  getEmployeeById(employeeId: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.get<any>(this.employeeApiUrl + 'GetEmployeeById/' + employeeId, httpOptions);
  }

  searchEmployees(employeeName?: string, status?: string, jobTitle?: string, supervisorName?: string, subName?: string): Observable<any[]> {
    let params = new HttpParams();
    
    if (employeeName) {
      params = params.set('employeeName', employeeName);
    }
    if (status) {
      params = params.set('status', status);
    }
    if (jobTitle) {
      params = params.set('jobTitle', jobTitle);
    }
    if (supervisorName) {
      params = params.set('supervisorName', supervisorName);
    }
    if (subName) {
      params = params.set('subName', subName);
    }
  
    return this.http.get<any[]>(this.employeeApiUrl + 'SearchEmployees', { params });
  }

  getPagingRecord(page: number, pageSize: number, sortFields: string[], sortOrders: string[]): Observable<PagedResult<Employee>> {
    let params = new HttpParams()
        .set('page', page.toString())
        .set('pageSize', pageSize.toString())
        .set('sortFields', sortFields.join(','))
        .set('sortOrders', sortOrders.join(','));

    return this.http.get<PagedResult<Employee>>(this.employeeApiUrl + 'GetPagingRecord', { params });
}

  // SubUnit
  getSubUnits(): Observable<any[]> {
    return this.http.get<any[]>(this.unitApiUrl + 'GetSubUnits');
  }

  postSubUnit(subUnit: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.unitApiUrl + 'PostSubUnit', subUnit, httpOptions);
  }

  putSubUnit(subUnit: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.unitApiUrl + 'PutSubUnit', subUnit, httpOptions);
  }

  deleteSubUnit(subUnitId: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<any>(this.unitApiUrl + 'DeleteSubUnit/' + subUnitId, httpOptions);
  }
}
