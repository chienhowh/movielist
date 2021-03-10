import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../movie-list/consts/global-constants.const';

@Injectable({
  providedIn: 'root'
})
export class MovieRequestService {

  constructor(
    private http: HttpClient
  ) { }

  request(method: string, url: string, params?: any): Observable<any> {
    if (method === API.POST) {
      return;
    }
    return this.http.get(environment.DEFAULT_IP + url + API.KEY);
  }
}
