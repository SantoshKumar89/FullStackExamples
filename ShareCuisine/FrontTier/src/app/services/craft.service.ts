import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Craft } from '../models/craft';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CraftService {

  constructor(private http: HttpClient) { }


  /** POST: add a new craft to the database */
  addCraft(craft: Craft): Observable<Craft> {
    return this.http.post<Craft>(`${environment.apiUrl}/api/v1/craft`, {
      craft
    })
  }

  /** Get: Get Craft details from database */
  getCraftById(_id: String): Observable<Craft> {
    return this.http.get<Craft>(`${environment.apiUrl}/api/v1/craft/${_id}`)
  }


  /** Get: Get Craft details from database */
  updateCraftById(craft: Craft): Observable<Craft> {
    return this.http.put<Craft>(`${environment.apiUrl}/api/v1/craft`,{
      craft
    })
  }

  /** Get: Get Craft details from database */
  getCraft(): Observable<[Craft]> {
    return this.http.get<[Craft]>(`${environment.apiUrl}/api/v1/craft`)
  }

  /** Get: Get  Craft by User details from database */
  getUserCraft(userId:string,isPublished:boolean): Observable<[Craft]> {
    return this.http.get<[Craft]>(`${environment.apiUrl}/api/v1/craft/createdBy/${userId}?isPublished=${isPublished}`)
  }


}
