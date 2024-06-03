import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashServService {

  dashboardUrl="http://52.224.222.102:9245/api/Dashboard"
  constructor(private http:HttpClient) { }

  fetchDetails(id:object):Observable<any>{
    return this.http.post(this.dashboardUrl,id)
  }
}
