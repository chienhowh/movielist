import { ListType } from './../../../core/enums/list-type.enum';
import { Observable } from 'rxjs';
import { MovieRequestService } from './../../../core/services/movie-request.service';
import { Injectable } from '@angular/core';
import { API } from '../../core/consts/global-constants.const';
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
  addtoList(id: number, listType: ListType, data: any): Observable<any> {
    let url = '';
    switch (listType) {
      case ListType.FAVORITE:
        url = API.FAVORITE;
        break;
      case ListType.WATCHLIST:
        url = API.WATCHLIST;
        break;
      case ListType.ADDLIST:
        url = API.ADDLIST;

      default:
        console.log('error type');
        return;
    }
    // return this.requestService.dbRequest(API.POST, API.WATCHLIST, movie);
    return this.requestService.fbRequest(API.PUT, url + '/' + id, data);
  }

  /**
   * remove movie from list
   */
  removeList(id: number, listType: ListType): Observable<any> {
    let url = '';
    switch (listType) {
      case ListType.FAVORITE:
        url = API.FAVORITE;
        break;
      case ListType.WATCHLIST:
        url = API.WATCHLIST;
        break;
      default:
        console.log('error type');
        return;
    }
    return this.requestService.fbRequest(API.DELETE, url + '/' + id);
  }

  /**
   * 從DB拿單筆電影
   * @param id movieid
   * @param listType watchlist, favorite
   */
  readListById(id: number, listType: ListType): Observable<any> {
    let url = '';
    switch (listType) {
      case ListType.FAVORITE:
        url = API.FAVORITE;
        break;
      case ListType.WATCHLIST:
        url = API.WATCHLIST;
        break;
      default:
        console.log('error type');
        return;
    }
    return this.requestService.fbRequest(API.GET, url + '/' + id);
  }
  /**
   * 修改電影內容
   * @id 電影編號
   * @patchData 資料
   */
  patchMovie(id: number, patchData): Observable<any> {
    return this.requestService.fbRequest(API.PATCH, API.WATCHLIST + '/' + id, patchData);
  }
}
