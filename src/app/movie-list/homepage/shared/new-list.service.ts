import { Observable, of } from 'rxjs';
import { MovieRequestService } from './../../../core/services/movie-request.service';
import { Injectable } from '@angular/core';
import { API } from '../../../core/consts/global-constants.const';

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

  getList(): Observable<any> {
    return this.requestSvc.fbRequest(API.GET, API.ADDLIST);
  }
}
