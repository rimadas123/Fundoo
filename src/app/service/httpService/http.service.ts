import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }


  get(url, isTokenReq = false, header = null) {
    return this.httpClient.get(url, isTokenReq && header);
  }

  post(data, url, isTokenReq = false, header = null) {

    return this.httpClient.post(url, data, isTokenReq && header);
  }
}
