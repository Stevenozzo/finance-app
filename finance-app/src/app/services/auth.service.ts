import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  register(
    username: string,
    password: string,
    email: string,
    name: string,
    lastName: string
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, {
      username,
      password,
      email,
      name,
      lastName,
    });
  }
}
