import { AddCustomlistModalComponent } from './add-customlist-modal/add-customlist-modal.component';
import { ROUTING_PATH } from 'src/app/core/consts/routing-path.const';
import { logging } from 'protractor';
import { ActivatedRoute } from '@angular/router';
import { UserLoginService } from './../../../core/services/user-login.service';
import { ListHandleService } from './../../../core/services/list-handle.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ListAddingComponent } from './../list-adding/list-adding.component';
import { ViewChild } from '@angular/core'
import { from, Observable, Subject } from 'rxjs';
import { ListType } from './../../../core/enums/list-type.enum';
import { MessageService } from './../../../core/services/message.service';
import { DetailService } from './../shared/detail.service';
import { API, API_POSTER } from '../../../core/consts/global-constants.const';
import { ICustomList, IMovieInfo, IRecommendation } from './../../../core/interfaces/movie.interface';
import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { tify } from 'chinese-conv';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, takeUntil, tap, mergeMap, toArray, filter } from 'rxjs/operators';
import { IWatchedMovie } from '../../watchlist/shared/watchlist';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  @ViewChild('header') header: ElementRef;
  ROUTING_PATH = ROUTING_PATH;
  API_POSTER = API_POSTER;
  movieId: number;
  movie: IMovieInfo;
  recommendations$?: Observable<IRecommendation[]>;
  isLogin = false;
  poster1x = '';
  poster2x = '';
  posterBg = '';
  runtime = '';
  /** 清單類別 */
  ListType = ListType;
  /** 在待播清單 */
  inWatchlist = false;
  isFavorite = false;

  /** 客制清單 */
  customList: ICustomList[] = [];
  ngUnsubscribe = new Subject();
  constructor(
    private detailService: DetailService,
    private nzMsgSvc: NzMessageService,
    private msgSvc: MessageService,
    private nzModal: NzModalService,
    private listHandleSvc: ListHandleService,
    private loginSvc: UserLoginService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.movieId = +this.route.snapshot.paramMap.get('id');
    this.getDetailById(this.movieId);
    this.getRecommendations(this.movieId);
    this.isLogin = this.loginSvc.isLogin();
    if (this.loginSvc.isLogin()) {
      this.getFavorite();
      this.getWatchListById();
    }
  }

  addItem(): void {
    const params = {
      timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
      title: this.movie.title,
      id: this.movieId,
      isWatched: false
    };
    this.listHandleSvc.addToFavorite(params);
  }

  getDetailById(id: number): void {
    const params = { append_to_response: 'credits,keywords' }
    this.detailService.getMovieDetail(id, params).pipe(
      // find specific crew
      map(res => ({ ...res, credits: { cast: res.credits.cast, crew: res.credits.crew.filter(c => c.job == 'Director' || c.job == 'Characters' || c.job == 'Writer') } }))
    ).subscribe((res) => {
      console.log('res', res);

      this.movie = res;
      this.poster1x = `${API.POSTER}w300_and_h450_bestv2/${res.poster_path}`;
      this.poster2x = `${API.POSTER}w600_and_h900_bestv2/${res.poster_path}`;
      this.posterBg = API_POSTER.GET_POSTER_BG + res.backdrop_path;
      this.runtime = `${Math.floor(res.runtime / 60)}h ${res.runtime % 60}m`
    });
  }

  getRecommendations(id: number) {
    this.recommendations$ = this.detailService.getRecommandtions(id).pipe(
      map((res: IRecommendation[]) => res.filter(ele => ele.release_date != '')),
      map((res: IRecommendation[]) => res.map(ele => ({ ...ele, vote_average: +(ele.vote_average * 10).toFixed(0) }))),
    )
  }

  showAddCustomlistModal() {
    this.nzModal.create({
      nzContent: AddCustomlistModalComponent,
      nzFooter: null,
      nzComponentParams: { movie: this.movie },
      nzBodyStyle: { padding: '24px' },
    })
  }

  handleAdd(type: ListType): void {
    if (!this.loginSvc.isLogin()) {
      this.nzMsgSvc.error('請先登入!');
      return;
    }
    const sendData = {
      timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
      title: this.movie.title,
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

  /** 類型簡轉繁 */
  getMovieGenres(genres: { id: number, name: string }[]): string[] {
    return genres.map(genre => tify(genre.name));
  }

  imgError(event): void {
    event.target.src = 'assets/not-found.jpeg';
    event.target.style['object-fit'] = 'contain';
    event.target.style['width'] = '100%';
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }



}
