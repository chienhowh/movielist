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
   * 加入待播清單
   * 先用session storge 代替
   */
  addtoList(id: number): boolean {
    const watchLists = this.getWatchList();
    if (!watchLists) {
      sessionStorage.setItem('watchlist', JSON.stringify([id]));
      return true;
    }
    else {
      // 檢查是否已加過
      const idIndex = watchLists.findIndex(list => list === id);
      if (idIndex > 0) {
        watchLists.splice(idIndex, 1);
        sessionStorage.setItem('watchlist', JSON.stringify(watchLists));
        return false;
      } else {
        watchLists.push(id);
        sessionStorage.setItem('watchlist', JSON.stringify(watchLists));
        return true;
      }
    }
  }

  getWatchList(): Array<any> {
    const stroge = sessionStorage.getItem('watchlist');
    return JSON.parse(stroge);
  }
}
