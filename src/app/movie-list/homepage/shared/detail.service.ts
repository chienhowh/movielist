import { Observable } from 'rxjs';
import { MovieRequestService } from './../../../core/services/movie-request.service';
import { Injectable } from '@angular/core';
import { API } from '../../consts/global-constants.const';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(
    private requestService: MovieRequestService
  ) { }

  /**
   * 取得電影明細
   */
  getMovieDetail(id: number): Observable<any> {
    return this.requestService.request(API.GET, `${API.GET_BY_ID}/${id}`);
  }

  /**
   * 加入後端待播清單
   */
  addtoList(movie): Observable<any> {
    return this.requestService.dbRequest(API.POST, API.WATCHLIST, movie);
  }

  /**
   * 從DB拿電影
   */
  readList(id: number): Observable<any> {
    return this.requestService.dbRequest(API.GET, API.WATCHLIST + '/' + id);
  }
}
