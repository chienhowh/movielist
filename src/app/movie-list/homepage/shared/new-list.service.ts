import { API } from 'src/app/core/consts/global-constants.const';
import { Observable, of } from 'rxjs';
import { MovieRequestService } from './../../../core/services/movie-request.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewListService {

  constructor(
    private requestSvc: MovieRequestService
  ) { }

  /**
   * 新增自訂清單
   */
  newList(id: string, data: any): Observable<any> {
    return this.requestSvc.fbRequest(API.PUT, API.ADDLIST + '/' + id, data);
  }

  /** 取得所有客制清單 */
  getList(): Observable<any> {
    return this.requestSvc.fbRequest(API.GET, API.ADDLIST).pipe(map(res => Object.values(res)));
  }

  /**
   * 新增電影至清單
   * @param listId 清單的id
   * @param movieId 電影id
   */
  addMovie(listId: string, data: any): Observable<any> {
    return this.requestSvc.fbRequest(API.PATCH, `${API.ADDLIST}/${listId}`, data);
  }
}
