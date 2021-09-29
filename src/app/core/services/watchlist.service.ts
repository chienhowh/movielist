import { map, tap } from 'rxjs/operators';
import { MovieRequestService } from './movie-request.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/movie-list/core/consts/global-constants.const';
import { IWatchedMovie } from 'src/app/movie-list/watchlist/shared/watchlist';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(
    private requestService: MovieRequestService
  ) { }



  /** 取得ＤＢ所有電影紀錄 */
  getWatchLists(): Observable<any> {
    return this.requestService.fbRequest(API.GET, API.WATCHLIST).pipe(
      map(res => {
        const list = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            list.push({
              id: key,
              ...res[key]
            });
          }
        }
        return list;
      })
    );
  }

  /**
   * 從DB拿單筆電影
   */
  getWatchById(id: number): Observable<any> {
    return this.requestService.dbRequest(API.GET, API.WATCHLIST + '/' + id);
  }
}
