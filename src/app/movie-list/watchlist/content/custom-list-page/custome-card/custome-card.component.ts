import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { MovieDetailService } from 'src/app/core/services/movie-detail.service';
import { IWatchedMovie } from 'src/app/movie-list/watchlist/shared/watchlist';
import { Component, Input, OnInit } from '@angular/core';
import { ListType } from 'src/app/core/enums/list-type.enum';
import { Params } from '@angular/router';
import * as firebase from 'firebase';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserLoginService } from 'src/app/core/services/user-login.service';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-custome-card',
  templateUrl: './custome-card.component.html',
  styleUrls: ['./custome-card.component.scss']
})
export class CustomeCardComponent implements OnInit {
  @Input() movieId?: number;
  movieFromTMDB?: IMovieInfo;
  movie?: IWatchedMovie;
  /** 清單類別 */
  ListType = ListType;
  /** 在待播清單 */
  isWatchList = false;
  isFavorite = false;

  constructor(
    private movieDetailSvc: MovieDetailService,
    private nzMsgSvc: NzMessageService,
    private loginSvc: UserLoginService,
    private msgSvc: MessageService
  ) { }

  ngOnInit(): void {
    if (this.movieId) {
      this.getDetailById(this.movieId);
      this.getFBMovieDetailById(this.movieId)
    }
  }

  getDetailById(id: number): void {
    this.movieDetailSvc.getMovieDetail(id).subscribe((res) => this.movieFromTMDB = res);
  }

  updateMovieDetail(type: ListType) {
    if (!this.loginSvc.isLogin()) {
      this.nzMsgSvc.error('Please login!');
      return;
    }
    const params: Params = {
      timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
      title: this.movieFromTMDB.title,
      id: this.movieFromTMDB.id,
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

  getFBMovieDetailById(id: number) {
    this.movieDetailSvc.getFBMovieDetailById(id).subscribe(res => {
      if (res) {
        this.isFavorite = res?.isFavorite;
        this.isWatchList = res?.isWatchList;
      }
    });
  }
}
