import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoginResponse } from '../../models/loginresponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationApiServiceService {

  readonly authApiUrl = 'http://localhost:5112/User/';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<void> {
    return this.http.post(`${this.authApiUrl}login`, { username, password }, { responseType: 'text' })
      .pipe(
        map((token: string) => {
          console.log('Token received:', token);
          localStorage.setItem('token', token);
        })
      );
  }

  register(registerData: any): Observable<void> {
    return this.http.post<LoginResponse>(`${this.authApiUrl}register`, registerData)
      .pipe(
        map((response: { token: string; }) => {
          localStorage.setItem('token', response.token);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}

