import { ListHandleService } from './../../../core/services/list-handle.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NewListService } from './../shared/new-list.service';
import { ListAddingComponent } from './../list-adding/list-adding.component';
import { Router, ActivatedRoute } from '@angular/router';

import { ROUTING_PATH } from '../../../core/consts/routing-path.const';
import { Observable, Subject } from 'rxjs';
import { ListType } from './../../../core/enums/list-type.enum';
import { MessageService } from './../../../core/services/message.service';
import { DetailService } from './../shared/detail.service';
import { API_POSTER } from '../../../core/consts/global-constants.const';
import { ICustomList, IMovieInfo } from './../../../core/interfaces/movie.interface';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { tify } from 'chinese-conv';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { map, takeUntil, tap } from 'rxjs/operators';
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
  isFavorite = false;
  /** 在待播清單 */
  inWatchlist = false;
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
  testItems;
  constructor(
    private detailService: DetailService,
    public modalRef: NzModalRef,
    private msgSvc: MessageService,
    private nzModal: NzModalService,
    private newListSvc: NewListService,
    private nzMsgSvc: NzMessageService,
    private listHandleSvc: ListHandleService,
    private fireStore: AngularFirestore
  ) {
  }

  ngOnInit(): void {
    this.movieId = this.info.id;
    this.getDetailById(this.movieId);
    // this.getCustomList();
    this.getFavorite();
    this.getWatchList();
  }

  addItem() {
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
    this.newListSvc.getList().subscribe(res => this.customList = res);
  }

  /** 加到客製清單 */
  addToCustom(listInfo: ICustomList): void {
    if (!listInfo) { return; }
    // 新的清單，完全沒值
    if (!listInfo.collections) {
      listInfo.collections = [this.movieId];
      this.newListSvc.addMovie(listInfo.id, listInfo).subscribe(() => {
        this.nzMsgSvc.success(`已加入${listInfo.subject}`);
      });
    } else {
      const collections = listInfo.collections;
      if (collections.includes(this.movieId)) {
        this.nzMsgSvc.info(`已在${listInfo.subject}`);
        return;
      } else {
        collections.push(this.movieId);
      }
      this.newListSvc.addMovie(listInfo.id, listInfo).subscribe(() => {
        this.nzMsgSvc.success(`已加入${listInfo.subject}`);
      });
    }
  }

  getFavorite(): void {
    this.listHandleSvc.getFromFavorite(this.movieId)
      .pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => this.isFavorite = res ? true : false);
  }

  getWatchList(): void {
    this.listHandleSvc.getFromWatchList(this.movieId)
      .pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => this.inWatchlist = res ? true : false);
  }

  /** 看電影是否有在清單 */
  searchInList(id: number): void {
    // 已經看過則不在待播清單(會存到已觀看)
    this.searchWatchlist(id).pipe(
      map(m => m?.beenWatched ?? true)
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
