import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }
  private baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/";

  login(data) {
    return this.httpService.post(data, this.baseUrl + 'user/login');
  }

  register(data){
    return this.httpService.post(data, this.baseUrl + 'user/userSignUp');
  }
  
  forgot(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.httpService.post(data, this.baseUrl + 'user/reset', true, httpOptions);

  }

  reset(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('tokenName')
      })
    }
    return this.httpService.post(data, this.baseUrl + 'user/reset-password', true, httpOptions);
  }
}
