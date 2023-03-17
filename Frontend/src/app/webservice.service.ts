import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

readonly ROOT_URL;
constructor(private http:HttpClient) {
this.ROOT_URL="http://localhost:8090";
}

post(uri:string,payload:Object){
  return this.http.post(`${this.ROOT_URL}/${uri}`,payload);
 }
}
