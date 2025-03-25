import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Staff from '../models/staff';
import EnrichedStaff from '../models/enrichedStaff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }

  getStaffs$(name: string, surname: string, type: string, dni: string): Observable<Staff[]> {
    if(dni != '' && dni != undefined){
      const url = `https://api.v2.infosas.es/v1/staff?dni=${dni}`;
      return this.http.get<Staff[]>(url);
    } else {
      const url = type == '' || type == undefined
      ? `https://api.v2.infosas.es/v1/staff?name=${name}&surname=${surname}`
      : `https://api.v2.infosas.es/v1/staff?name=${name}&surname=${surname}&type=${type}`;
      return this.http.get<Staff[]>(url);
    }
  }

  getStaff$(id: number): Observable<EnrichedStaff> {
    return this.http.get<EnrichedStaff>(`https://api.v2.infosas.es/v1/staff/${id}`);
  }
}
