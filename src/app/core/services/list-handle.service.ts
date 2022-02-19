import { MovieRequestService } from './movie-request.service';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { API, COMMON, FIRE_STORE_COLLECTIONS } from '../consts/global-constants.const';
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
  getFromFavorite(id?: number): Observable<DocumentData | DocumentData[]> {
    if (id) {
      return this.getFromList(FIRE_STORE_COLLECTIONS.FAVORITELIST, id);
    } else {
      return this.movieRequestSvc.fsRequest(API.GET, FIRE_STORE_COLLECTIONS.FAVORITELIST);
    }
  }

  addToFavorite(params: any): void {
    this.addToList('favorite', params);
  }

  removeFavorite(id: number): void {
    this.removeFromList('favorite', id);
  }

  // 待播清單 start
  getFromWatchList() {
    return this.movieRequestSvc.fsRequest(API.GET, FIRE_STORE_COLLECTIONS.WATCHLIST);
  }

  getFromWatchListById(id: number): Observable<DocumentData> {
    return this.getFromList('watchlist', id);
  }

  addToWatchList(params: any): void {
    this.addToList('watchlist', params);
  }

  addCommentToWatchList(params: any): void {
    this.addToList('watchlist', params);
  }

  removeFromWatchList(id: number): void {
    this.removeFromList('watchlist', id);
  }

  // 客製清單 start
  /** 取得客製化所有清單 */
  getCustomlist(): Observable<ICustomList[]> {
    return this.movieRequestSvc.fsGet(FIRE_STORE_COLLECTIONS.CUSTOMLIST);
  }

  getCustomlistById(listId: string, movieId: string) {
    return this.movieRequestSvc.fsRequest(API.GET_BY_ID, `${FIRE_STORE_COLLECTIONS.CUSTOMLIST}/${listId}/movies`, movieId);
  }
  /** 新增客製清單 */
  newCustomList(params: any): Promise<void> {
    return this.movieRequestSvc.fsPost(FIRE_STORE_COLLECTIONS.CUSTOMLIST, params);
  }

  /**
   * 加到自訂清單內by id
   * @param listId 清單的id
   * @param params 電影資料
   */
  async addToSpecList(listId: string, params: any): Promise<void> {
    const collection = `${FIRE_STORE_COLLECTIONS.CUSTOMLIST}/${listId}/${FIRE_STORE_COLLECTIONS.MOVIES}`;
    return this.movieRequestSvc.fsPost(collection, params, params.id);
  }

  removeFromSpecList(listId: string, movieId: string) {
    const collection = `${FIRE_STORE_COLLECTIONS.CUSTOMLIST}/${listId}/${FIRE_STORE_COLLECTIONS.MOVIES}`;
    return this.movieRequestSvc.fsDelete(collection, movieId);
  }

  getSpecList(listId: string): Observable<DocumentData[]> {
    const uid = sessionStorage.getItem(COMMON.UID);
    return this.fireStore.collection('users').doc(uid)
      .collection(FIRE_STORE_COLLECTIONS.CUSTOMLIST)
      .doc(listId).collection(FIRE_STORE_COLLECTIONS.MOVIES).valueChanges();
  }

  getSpecFields(listId: string): Observable<DocumentData> {
    const uid = sessionStorage.getItem(COMMON.UID);
    return this.fireStore.collection('users').doc(uid)
      .collection(FIRE_STORE_COLLECTIONS.CUSTOMLIST)
      .doc(listId).get().pipe(map(res => res.data()));
  }

}

export interface SpecListField {
  desc: string;
  subject: string;
}
