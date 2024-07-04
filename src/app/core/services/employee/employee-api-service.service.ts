import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
