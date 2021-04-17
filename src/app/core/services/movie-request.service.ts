import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API, API_POSTER } from '../../movie-list/consts/global-constants.const';

@Injectable({
  providedIn: 'root'
})
export class MovieRequestService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   *
   * @param querys 搜索條件
   */
  request(method: string, url: string, sendData?: any): Observable<any> {
    // 修改語言
    // let params = { language: 'zh-TW' };
    const params = { ...sendData };
    if (method === API.POST) {
      return;
    }

    return this.http.get(environment.DEFAULT_IP + url + API.KEY, { params });
  }

  requestPoster(posterPath: string, width = '200'): Observable<any> {
    return this.http.get(`${API_POSTER.GET_POSTER}/w${width}/${posterPath}`);
  }
}
