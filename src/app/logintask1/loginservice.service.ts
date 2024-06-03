import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  loginUrl="http://52.224.222.102:9245/api/Login"

  
  constructor(private http:HttpClient) { }

  loginUser(data : any):Observable<any>{
    return this.http.post(this.loginUrl,data)
  }
}
