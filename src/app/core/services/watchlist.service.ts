import { map } from 'rxjs/operators';
import { MovieRequestService } from './movie-request.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/core/consts/global-constants.const';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(
    private requestService: MovieRequestService
  ) { }



  /** 取得ＤＢ所有電影紀錄 */
  getWatchLists(endpoint: string): Observable<any> {
    return this.requestService.fbRequest(API.GET, endpoint).pipe(
      map(res => Object.values(res))
    );
  }

  /**
   * 從DB拿單筆電影
   */
  getWatchById(id: number): Observable<any> {
    return this.requestService.dbRequest(API.GET, API.WATCHLIST + '/' + id);
  }
}
