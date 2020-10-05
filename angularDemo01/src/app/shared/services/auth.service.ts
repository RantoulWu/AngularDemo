import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root' // root module
})
export class AuthService {
  user = null;

  constructor(private httpClient: HttpClient) {
  }
  login(user): Observable<{success: boolean, user: object}> {
    const userFormData = new HttpParams()
      .append('username', user.username)
      .append('password', user.password);
    return this.httpClient.post<{success: boolean, user: object}>(
      `${environment.API_URL}/login`,
      userFormData
    );
  }
  logout(): Observable<{success: boolean, message: string}> {
    this.user = null;
    // const userFormData = new HttpParams()
    //   .append('username', '...')
    //   .append('password', '...');
    return this.httpClient.post<{success: boolean, message: string}>(
      `${environment.API_URL}/logout`, null);
  }
}
