import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagedResult } from '../../models/paged-result.model';
import { Employee } from '../../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveApiServiceService {

  readonly leaveApiUrl = 'http://localhost:5194/Leave/';

  constructor(private http: HttpClient) { }

  // Leave
  getLeaves(): Observable<any[]> {
    return this.http.get<any[]>(this.leaveApiUrl + 'GetLeaves');
  }

  postLeave(leave: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.leaveApiUrl + 'PostLeave', leave, httpOptions);
  }

  putLeave(leave: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.leaveApiUrl + 'PutLeave', leave, httpOptions);
  }

  deleteLeave(leaveId: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<any>(this.leaveApiUrl + 'DeleteLeave/' + leaveId, httpOptions);
  }
}
