import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { TokenResponse } from '../models/tokenResponse';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;


  constructor(private http: HttpClient) {
    //Authentication changes
    const token = sessionStorage.getItem('token');
    this.currentUserSubject = new BehaviorSubject<User>(this.tokenDecoder(token));
    this.currentUser = this.currentUserSubject.asObservable();
  }

   // Get logged in user details
   public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /** POST: add a new user to the database */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/api/v1/user`, {
      user
    })
  }


  /** POST: add a new user to the database */
  authenticate(user: User): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${environment.apiUrl}/api/v1/login`, {
      user
    })
  }


  //Method used to decode the token
  tokenDecoder(token: string): User {
    if (!token) {
      return null;
    }
    return jwt_decode(token);
  }





}
