import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API, COMMON, FIRE_STORE_COLLECTIONS } from '../consts/global-constants.const';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { MovieRequestService } from './movie-request.service';
import { ICustomList } from '../interfaces/movie.interface';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomlistService {

  constructor(
    private fireStore: AngularFirestore,
    private movieRequestSvc: MovieRequestService
  ) { }

  // 客製清單 start
  /** 取得客製化所有清單 */
  getCustomlist(): Observable<ICustomList[]> {
    return this.movieRequestSvc.fsGet(FIRE_STORE_COLLECTIONS.CUSTOMLIST);
  }


  /** 新增客製清單 */
  newCustomList(params: any) {
    return this.movieRequestSvc.fsPost(FIRE_STORE_COLLECTIONS.CUSTOMLIST, params);
  }

  /**
  * 加到自訂清單內by id
  * @param listId 清單的id
  * @param params 電影資料
  */
  addToCustomeList(listId: string, params: any) {
    const collection = `${FIRE_STORE_COLLECTIONS.CUSTOMLIST}/${listId}/${FIRE_STORE_COLLECTIONS.MOVIES}`;
    return this.movieRequestSvc.fsPost(collection, params, params.id);
  }

  removeFromCustomList(listId: string, movieId: string) {
    const collection = `${FIRE_STORE_COLLECTIONS.CUSTOMLIST}/${listId}/${FIRE_STORE_COLLECTIONS.MOVIES}`;
    return this.movieRequestSvc.fsDelete(collection, movieId);
  }

  /** 取得客製表單所有電影 */
  getCustomlistMovies(customlistID: string) {
    const uid = sessionStorage.getItem(COMMON.UID);
    const collectionName = `users/${uid}/${FIRE_STORE_COLLECTIONS.CUSTOMLIST}/${customlistID}/${FIRE_STORE_COLLECTIONS.MOVIES}`
    return this.fireStore.collection(collectionName).snapshotChanges().pipe(map((actions: DocumentData[]) =>
      actions.map(a => a.payload.doc.data())
    ), take(1));
  }

  /** 取得客製表單標題，簡介 */
  getCustomlistInfo(customlistID: string) {
    const uid = sessionStorage.getItem(COMMON.UID);
    const collectionName = `users/${uid}/${FIRE_STORE_COLLECTIONS.CUSTOMLIST}`
    return this.fireStore.collection(collectionName).doc(customlistID).get().pipe(map(res => res.data()), take(1));
  }

  /** 取得客製表單單筆電影 */
  getCustomlistMovieDeatailById(listId: string, movieId: string) {
    return this.movieRequestSvc.fsRequest(API.GET_BY_ID, `${FIRE_STORE_COLLECTIONS.CUSTOMLIST}/${listId}/${FIRE_STORE_COLLECTIONS.MOVIES}`, movieId);
  }
}
