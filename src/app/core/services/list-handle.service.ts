import { MovieRequestService } from './movie-request.service';
import { map, take, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore'
import { API, FIRE_STORE_COLLECTIONS } from '../consts/global-constants.const';
import { Observable } from 'rxjs';
import { ICustomList } from '../interfaces/movie.interface';
@Injectable({
  providedIn: 'root'
})
export class ListHandleService {

  constructor(
    private fireStore: AngularFirestore,
    private movieRequestSvc: MovieRequestService
  ) { }

  /**
   * 是否存在列表裡
   * @param listName firestore collection name
   * @param id doc id
   */
  getFromList(listName: string, id: number): Observable<DocumentData> {
    return this.movieRequestSvc.fsRequest(API.GET_BY_ID, listName, id.toString());
  }

  addToList(listName: string, params: any): void {
    console.log(params);
    this.movieRequestSvc.fsRequest(API.POST, listName, params);
  }

  removeFromList(listName: string, id: number): void {
    this.movieRequestSvc.fsRequest(API.DELETE, listName, id.toString());
  }

  // 我的最愛 start
  getFromFavorite(id: number): Observable<DocumentData> {
    return this.getFromList('favorite', id);
  }

  addToFavorite(params: any): void {
    this.addToList('favorite', params);
  }

  removeFavorite(id: number): void {
    this.removeFromList('favorite', id);
  }

  // 待播清單 start
  getFromWatchList(id: number): Observable<DocumentData> {
    return this.getFromList('watchlist', id);
  }

  addToWatchList(params: any): void {
    this.addToList('watchlist', params);
  }

  removeFromWatchList(id: number): void {
    this.removeFromList('watchlist', id);
  }

  // 客製清單 start
  /** 取得客製化清單 */
  getCustomlist(): Observable<ICustomList[]> {
    return this.movieRequestSvc.fsGet(FIRE_STORE_COLLECTIONS.CUSTOMLIST);
  }
  /** 新增客製清單 */
  newCustomList(params: any): Promise<void> {
    return this.movieRequestSvc.fsPost(FIRE_STORE_COLLECTIONS.CUSTOMLIST, params);
  }
}
