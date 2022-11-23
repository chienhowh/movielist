import { BaseComponent } from './../../../../shared/components/base/base.component';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Params } from '@angular/router';
import * as firebase from 'firebase';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { takeUntil } from 'rxjs/operators';
import { ROUTING_PATH } from 'src/app/core/consts/routing-path.const';
import { ListType } from 'src/app/core/enums/list-type.enum';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { MessageService } from 'src/app/core/services/message.service';
import { MovieDetailService } from 'src/app/core/services/movie-detail.service';
import { UserLoginService } from 'src/app/core/services/user-login.service';
import { AddCustomlistModalComponent } from 'src/app/movie-list/homepage/movie-detail/add-customlist-modal/add-customlist-modal.component';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent extends BaseComponent implements OnInit {
  @Input() movie: IMovieInfo;
  @Input() listType: string; // watch or favorite
  @Output() refreshList = new EventEmitter<boolean>();
  ROUTING_PATH = ROUTING_PATH;

  /** 在待播清單 */
  isWatchList = false;
  isFavorite = false;
  isLogin = false;
  ListType = ListType;
  constructor(
    private nzModal: NzModalService,
    private loginSvc: UserLoginService,
    private nzMsgSvc: NzMessageService,
    private movieDetailSvc: MovieDetailService,
    private msgSvc: MessageService
  ) {
    super()
  }

  ngOnInit(): void {

    this.isLogin = this.loginSvc.isLogin();
    if (this.loginSvc.isLogin() && this.movie.id) {
      this.getFBMovieDetailById(this.movie.id);
    }
  }

  getFBMovieDetailById(id: number) {
    this.movieDetailSvc.getFBMovieDetailById(id).pipe(takeUntil(this.destroyed$)).subscribe(res => {
      this.isFavorite = res?.isFavorite;
      this.isWatchList = res?.isWatchList;
      console.log('from item list');

    });
  }

  updateMovieDetail(type: ListType | 'delete') {
    if (!this.loginSvc.isLogin()) {
      this.nzMsgSvc.error('Please login!');
      return;
    }
    const params: Params = {
      timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
      title: this.movie.title,
      id: this.movie.id,
      isWatched: false
    };
    if (type === 'delete') {
      this.deleteFromList(this.listType);
      return;
    }
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
    this.movieDetailSvc.addToFBMovie(params, this.movie.id).subscribe(() => {
      this.msgSvc.handleAddAction(listName, action);
      this.getFBMovieDetailById(this.movie.id);
    });
  }

  deleteFromList(listType: string) {
    const params: Params = {
      timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
      title: this.movie.title,
      id: this.movie.id,
      isWatched: false
    };
    let listName = '';
    if (listType === 'favorite') {
      params.isFavorite = false;
      listName = 'favorite';
    }
    if (listType === 'watch') {
      params.isWatchList = false;
      listName = 'watchlist';
    }
    this.movieDetailSvc.addToFBMovie(params, this.movie.id).subscribe(() => {
      this.msgSvc.handleAddAction(listName, false);
      this.refreshList.emit(true);
    });
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
