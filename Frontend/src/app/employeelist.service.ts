import { Injectable } from '@angular/core';
import { WebserviceService } from './webservice.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeelistService {

  constructor(private webservice:WebserviceService) { }

  getemplist(){
    return this.webservice.get('profile-list');
  }
}
