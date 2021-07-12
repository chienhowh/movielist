import { MovieRequestService } from './movie-request.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/movie-list/consts/global-constants.const';
import { IWatchedMovie } from 'src/app/movie-list/watchlist/shared/watchlist';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(
    private requestService: MovieRequestService
  ) { }



  /** 取得ＤＢ所有電影紀錄 */
  getWatchLists(): Observable<IWatchedMovie[]> {
    return this.requestService.dbRequest(API.GET, API.WATCHLIST);
  }

  /**
  * 從DB拿單筆電影
  */
  getWatchById(id: number): Observable<any> {
    return this.requestService.dbRequest(API.GET, API.WATCHLIST + '/' + id);
  }
}
