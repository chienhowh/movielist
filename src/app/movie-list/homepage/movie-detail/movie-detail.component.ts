import { UserLoginService } from './../../../core/services/user-login.service';
import { ListHandleService } from './../../../core/services/list-handle.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NewListService } from './../shared/new-list.service';
import { ListAddingComponent } from './../list-adding/list-adding.component';

import { ROUTING_PATH } from '../../../core/consts/routing-path.const';
import { from, Observable, Subject } from 'rxjs';
import { ListType } from './../../../core/enums/list-type.enum';
import { MessageService } from './../../../core/services/message.service';
import { DetailService } from './../shared/detail.service';
import { API_POSTER } from '../../../core/consts/global-constants.const';
import { ICustomList, IMovieInfo } from './../../../core/interfaces/movie.interface';
import { Component, Input, OnInit, OnDestroy, Pipe } from '@angular/core';
import { tify } from 'chinese-conv';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { map, takeUntil, tap, mergeMap, toArray } from 'rxjs/operators';
import { IWatchedMovie } from '../../watchlist/shared/watchlist';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  @Input() info;

  get ROUTING_PATH(): typeof ROUTING_PATH {
    return ROUTING_PATH;
  }
  API_POSTER = API_POSTER;
  movieId: number;
  displayList: IMovieInfo;
  /** 清單類別 */
  ListType = ListType;
  /** 在待播清單 */
  inWatchlist = false;
  isFavorite = false;
  genres: string[] = [];
  listMap = [
    { header: '類型', key: 'genres' },
    { header: '上映日期', key: 'release_date' },
    { header: '評分', key: 'vote_average' },
    { header: '片長', key: 'runtime' },
  ];

  /** 客制清單 */
  customList: ICustomList[] = [];
  ngUnsubscribe = new Subject();
  constructor(
    private detailService: DetailService,
    public modalRef: NzModalRef,
    private nzMsgSvc: NzMessageService,
    private msgSvc: MessageService,
    private nzModal: NzModalService,
    private listHandleSvc: ListHandleService,
    private loginSvc: UserLoginService
  ) {
  }

  ngOnInit(): void {
    this.movieId = this.info.id;
    this.getDetailById(this.movieId);
    if (this.loginSvc.isLogin()) {
      this.getFavorite();
      this.getWatchListById();
      this.getCustomList();
      // this.inCustomList('615904')
    }
  }

  addItem(): void {
    const params = {
      timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
      title: this.displayList.title,
      id: this.movieId,
      isWatched: false
    };
    this.listHandleSvc.addToFavorite(params);
  }

  getDetailById(id: number): void {
    this.detailService.getMovieDetail(id).subscribe((res) => {
      this.displayList = res;
      this.genres = this.getMovieGenres(res.genres);
    });
  }

  handleAdd(type: ListType): void {
    if (!this.loginSvc.isLogin()) {
      this.nzMsgSvc.error('請先登入!');
      return;
    }
    const sendData = {
      timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
      title: this.displayList.title,
      id: this.movieId,
      isWatched: false
    };
    switch (type) {
      case ListType.WATCHLIST:
        if (this.inWatchlist) {
          this.listHandleSvc.removeFromWatchList(this.movieId);
          this.inWatchlist = false;
          this.msgSvc.handleAddAction('待播清單', this.inWatchlist);
        } else {
          this.listHandleSvc.addToWatchList(sendData);
          this.inWatchlist = true;
          this.msgSvc.handleAddAction('待播清單', this.inWatchlist);
        }
        break;
      case ListType.FAVORITE:
        if (this.isFavorite) {
          this.listHandleSvc.removeFavorite(this.movieId);
          this.isFavorite = false;
          this.msgSvc.handleAddAction('我的最愛', this.isFavorite);
        } else {
          this.listHandleSvc.addToFavorite(sendData);
          this.isFavorite = true;
          this.msgSvc.handleAddAction('我的最愛', this.isFavorite);
        }
    }
  }

  /** 取得所有客制清單 */
  getCustomList(): void {
    this.listHandleSvc.getCustomlist().pipe(takeUntil(this.ngUnsubscribe)).pipe(
      tap(r => console.log(r))).subscribe((lists) => {
        from(lists).pipe(
          mergeMap(li => {
            return this.inCustomList(li, li.id, this.movieId.toString());
          }),
          toArray()
        ).subscribe(res => this.customList = res);


      });
  }

  /** 電影是否在客制清單裡 */
  inCustomList(list: ICustomList, listId: string, movieId: string) {
    return this.listHandleSvc.getCustomlistById(listId, movieId).pipe(map(r => ({ ...list, inList: r ? true : false })));
  }

  toggleCustom(item: ICustomList) {
    if (item.inList) {
      this.deleteFromCustom(item);
    } else {
      this.addToCustom(item);
    }
  }

  /** 加到客製清單 */
  addToCustom(listInfo: ICustomList): void {
    if (!listInfo) { return; }
    const sendData = {
      timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
      title: this.displayList.title,
      id: this.movieId.toString(),
      isWatched: false
    };
    this.listHandleSvc.addToSpecList(listInfo.id, sendData).then(() => {
      this.getCustomList();
      this.nzMsgSvc.success(`已加入${listInfo.subject}`);
    });
  }

  deleteFromCustom(list: ICustomList) {
    this.listHandleSvc.removeFromSpecList(list.id, this.movieId.toString()).then(() => {
      this.getCustomList();
      this.nzMsgSvc.success(`已移出${list.subject}`);
    });
  }


  getFavorite(): void {
    this.listHandleSvc.getFromFavorite(this.movieId)
      .pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => this.isFavorite = res ? true : false);
  }

  getWatchListById(): void {
    this.listHandleSvc.getFromWatchListById(this.movieId)
      .pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => this.inWatchlist = res ? true : false);
  }

  /** 看電影是否有在清單 */
  searchInList(id: number): void {
    // 已經看過則不在待播清單(會存到已觀看)
    this.searchWatchlist(id).pipe(
      map(m => m?.isWatched ?? true)
    ).subscribe(res => this.inWatchlist = !res);
    this.searchFavorite(id).subscribe(res => this.isFavorite = !!res);
  }

  searchWatchlist(id: number): Observable<IWatchedMovie> {
    return this.detailService.readListById(id, ListType.WATCHLIST);
  }

  searchFavorite(id: number): Observable<any> {
    return this.detailService.readListById(id, ListType.FAVORITE);
  }

  getMovieGenres(genres: { id: number, name: string }[]): string[] {
    return genres.map(genre => tify(genre.name));
  }

  imgError(event): void {
    event.target.src = 'assets/not-found.jpeg';
    event.target.style['object-fit'] = 'contain';
    event.target.style['width'] = '100%';
  }


  openNewList(): void {
    this.nzModal.create({
      nzContent: ListAddingComponent,
      nzFooter: null,
      nzBodyStyle: { padding: '24px' },
      nzOnOk: () => { this.getCustomList(); }
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }



}
