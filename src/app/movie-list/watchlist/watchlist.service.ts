import { MovieRequestService } from 'src/app/core/services/movie-request.service';
import { Injectable } from '@angular/core';
import { API } from '../consts/global-constants.const';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(
    private requestService: MovieRequestService
  ) { }

  /** 取得ＤＢ所有電影 */
  getWatchLists() {
   return this.requestService.dbRequest(API.GET, API.WATCHLIST);
  }


}
