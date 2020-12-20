import { Injectable } from '@angular/core';
import { Language } from '../models/language';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Level } from '../models/level';
import { Enrollment } from '../models/enrollment';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

/** GET: get language details */
getLanguage(): Observable<[Language]> {
  return this.http.get<[Language]>(`${environment.apiUrl}/api/v1/master/language`)
}

/** GET: get Level details */
getLevel(): Observable<[Level]> {
  return this.http.get<[Level]>(`${environment.apiUrl}/api/v1/master/level`)
}

/** GET: get enrollment details */
getEnrollment(): Observable<[Enrollment]> {
  return this.http.get<[Enrollment]>(`${environment.apiUrl}/api/v1/master/enrollment`)
}


}
