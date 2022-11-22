import { BaseComponent } from './../../../shared/components/base/base.component';
import { MovieDetailService } from './../../../core/services/movie-detail.service';
import { AddCustomlistModalComponent } from './add-customlist-modal/add-customlist-modal.component';
import { ROUTING_PATH } from 'src/app/core/consts/routing-path.const';
import { logging } from 'protractor';
import { ActivatedRoute, Route, Router, Params } from '@angular/router';
import { UserLoginService } from './../../../core/services/user-login.service';
import { ListHandleService } from './../../../core/services/list-handle.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ViewChild } from '@angular/core'
import { Observable, Subject } from 'rxjs';
import { ListType } from './../../../core/enums/list-type.enum';
import { MessageService } from './../../../core/services/message.service';
import { DetailService } from './../shared/detail.service';
import { API, API_POSTER } from '../../../core/consts/global-constants.const';
import { ICustomList, IMovieInfo, IRecommendation } from './../../../core/interfaces/movie.interface';
import { Component, OnInit, ElementRef } from '@angular/core';
import { tify } from 'chinese-conv';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, takeUntil } from 'rxjs/operators';
import { IWatchedMovie } from '../../watchlist/shared/watchlist';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent extends BaseComponent implements OnInit {
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
  isWatchList = false;
  isFavorite = false;

  /** 客制清單 */
  customList: ICustomList[] = [];
  constructor(
    private detailService: DetailService,
    private nzMsgSvc: NzMessageService,
    private msgSvc: MessageService,
    private nzModal: NzModalService,
    private loginSvc: UserLoginService,
    private route: ActivatedRoute,
    private movieDetailSvc: MovieDetailService
  ) {
    super()
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroyed$)).subscribe(res => {
      this.movieId = +res.get('id');
      this.getDetailById(this.movieId);
      this.getRecommendations(this.movieId);
      this.isLogin = this.loginSvc.isLogin();
      if (this.loginSvc.isLogin() && this.movieId) {
        this.getFBMovieDetailById(this.movieId);
      }
    })

  }

  getDetailById(id: number): void {
    const params = { append_to_response: 'credits,keywords' }
    this.detailService.getMovieDetail(id, params).pipe(
      // find specific crew
      map(res => ({ ...res, credits: { cast: res.credits.cast, crew: res.credits.crew.filter(c => c.job == 'Director' || c.job == 'Characters' || c.job == 'Writer') } }))
    ).subscribe((res) => {
      this.movie = res;
      this.poster1x = `${API.POSTER}w300_and_h450_bestv2/${res.poster_path}`;
      this.poster2x = `${API.POSTER}w600_and_h900_bestv2/${res.poster_path}`;
      this.posterBg = API_POSTER.GET_POSTER_BG + res.backdrop_path;
      this.runtime = `${Math.floor(res.runtime / 60)}h ${res.runtime % 60}m`
    });
  }

  getFBMovieDetailById(id: number) {
    this.movieDetailSvc.getFBMovieDetailById(id).pipe(takeUntil(this.destroyed$)).subscribe(res => {
      this.isFavorite = res?.isFavorite;
      this.isWatchList = res?.isWatchList;
    });
  }

  updateMovieDetail(type: ListType) {
    if (!this.loginSvc.isLogin()) {
      this.nzMsgSvc.error('Please login!');
      return;
    }
    const params: Params = {
      timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
      title: this.movie.title,
      id: this.movieId,
      isWatched: false
    };
    let listName = '';
    let action = true;
    if (type === ListType.FAVORITE) {
      params.isFavorite = !this.isFavorite;
      listName = 'favorite';
      action = !this.isFavorite;
    }
    if (type === ListType.WATCHLIST) {
      params.isWatchList = !this.isWatchList;
      listName = 'watchlist';
      action = !this.isWatchList;
    }
    this.movieDetailSvc.addToFBMovie(params, this.movieId).subscribe(() => {
      this.msgSvc.handleAddAction(listName, action);
      this.getFBMovieDetailById(this.movieId);
    });
  }

  getRecommendations(id: number) {
    this.recommendations$ = this.detailService.getRecommandtions(id).pipe(
      map((res: IRecommendation[]) => res.filter(ele => ele.release_date != '')),
      map((res: IRecommendation[]) => res.map(ele => ({ ...ele, vote_average: +(ele.vote_average * 10).toFixed(0) }))),
    )
  }

  showAddCustomlistModal() {
    if (!this.loginSvc.isLogin()) {
      this.nzMsgSvc.error('Please login!');
      return;
    }
    this.nzModal.create({
      nzContent: AddCustomlistModalComponent,
      nzFooter: null,
      nzComponentParams: { movie: this.movie },
      nzBodyStyle: { padding: '24px' },
    })
  }
}
