import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "https://api.example.com/register"; // Corrected variable name
  private _loginUrl = "https://api.example.com/login"; // Corrected variable name

  constructor(private http: HttpClient) {}

  // Example method to send data to an API
  loginUser(user: any): Observable<any> {
    // You should provide user data as the second argument
    return this.http.post(this._loginUrl, user);
  }

  // Example method to send data to an API
  registerUser(user: any): Observable<any> {
    // You should provide user data as the second argument
    return this.http.post(this._registerUrl, user);
  }
}
