import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API, COMMON, FIRE_STORE_COLLECTIONS } from '../consts/global-constants.const';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { MovieRequestService } from './movie-request.service';
import { ICustomList } from '../interfaces/movie.interface';

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
  newCustomList(params: any): Promise<void> {
    return this.movieRequestSvc.fsPost(FIRE_STORE_COLLECTIONS.CUSTOMLIST, params);
  }

  /**
  * 加到自訂清單內by id
  * @param listId 清單的id
  * @param params 電影資料
  */
  async addToCustomeList(listId: string, params: any): Promise<void> {
    const collection = `${FIRE_STORE_COLLECTIONS.CUSTOMLIST}/${listId}/${FIRE_STORE_COLLECTIONS.MOVIES}`;
    return this.movieRequestSvc.fsPost(collection, params, params.id);
  }

  removeFromCustomList(listId: string, movieId: string) {
    const collection = `${FIRE_STORE_COLLECTIONS.CUSTOMLIST}/${listId}/${FIRE_STORE_COLLECTIONS.MOVIES}`;
    return this.movieRequestSvc.fsDelete(collection, movieId);
  }

  /** 取得客製表單所有電影 */
  getCustomListById(listId: string): Observable<DocumentData[]> {
    const uid = sessionStorage.getItem(COMMON.UID);
    return this.fireStore.collection('users').doc(uid)
      .collection(FIRE_STORE_COLLECTIONS.CUSTOMLIST)
      .doc(listId).collection(FIRE_STORE_COLLECTIONS.MOVIES).valueChanges();
  }

  /** 取得客製表單單筆電影 */
  getCustomlistMovieDeatailById(listId: string, movieId: string) {
    return this.movieRequestSvc.fsRequest(API.GET_BY_ID, `${FIRE_STORE_COLLECTIONS.CUSTOMLIST}/${listId}/${FIRE_STORE_COLLECTIONS.MOVIES}`, movieId);
  }
}
