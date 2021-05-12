import { Observable } from 'rxjs';
import { MovieRequestService } from './../../../core/services/movie-request.service';
import { Injectable } from '@angular/core';
import { API } from '../../consts/global-constants.const';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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


  // DB start
  /**
   * 加入後端待播清單
   */
  addtoList(movie): Observable<any> {
    return this.requestService.dbRequest(API.POST, API.WATCHLIST, movie);
  }

  /**
   * click icon to remove movie from list
   */
  removeList(id: number): Observable<any> {
    return this.requestService.dbRequest(API.DELETE, API.WATCHLIST + '/' + id);
  }

  /**
   * 從DB拿單筆電影
   */
  readList(id: number): Observable<any> {
    return this.requestService.dbRequest(API.GET, API.WATCHLIST + '/' + id);
  }
  /**
   * 修改電影內容
   */
  patchMovie(id: number, patchData): Observable<any> {
    return this.requestService.dbRequest(API.PATCH, API.WATCHLIST + '/' + id, patchData);
  }
}
