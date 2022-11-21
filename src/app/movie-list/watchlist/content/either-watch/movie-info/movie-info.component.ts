import { CustomlistService } from './../../../../../core/services/customlist.service';
import { Subject } from 'rxjs';
import { ListHandleService } from './../../../../../core/services/list-handle.service';
import { MessageService } from './../../../../../core/services/message.service';
import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { API_POSTER } from 'src/app/core/consts/global-constants.const';
import { EitherWatch } from 'src/app/core/enums/list-type.enum';
import { ICustomList, IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { MovieDetailComponent } from 'src/app/movie-list/homepage/movie-detail/movie-detail.component';
import { CommentComponent } from '../../comment/comment.component';
import { takeUntil } from 'rxjs/operators';
import * as firebase from 'firebase';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserLoginService } from 'src/app/core/services/user-login.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit, OnDestroy {
  @Input() movie: IMovieInfo;
  /** 已看 || 未看 */
  @Input() isWatched: EitherWatch;
  // 海報網址
  API_POSTER = API_POSTER;
  isFavorite = false;
  /** 客制清單 */
  customList: ICustomList[] = [];
  customListName: ICustomList;
  ngUnsubscribe = new Subject();
  constructor(
    private modalSvc: NzModalService,
    private listHandleSvc: ListHandleService,
    private msgSvc: MessageService,
    private nzMsgSvc: NzMessageService,
    private loginSvc: UserLoginService,
    private customListSvc:CustomlistService
  ) { }

  ngOnInit(): void {
    if (this.loginSvc.isLogin()) {
      this.getFavorite();
      this.getCustomList();
    }
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }

  getFavorite(): void {
    this.listHandleSvc.getFromFavorite(this.movie.id)
      .pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => this.isFavorite = res ? true : false);
  }

  /**
   * 跳出顯示電影詳情視窗
   *
   */
  onWatchDetail(info: IMovieInfo): void {
    this.modalSvc.create({
      nzContent: MovieDetailComponent,
      nzComponentParams: {
        // info
      },
      nzFooter: null,
      nzBodyStyle: { padding: '24px' },
    });
  }

  imgError(event): void {
    event.target.src = 'assets/not-found.jpeg';
    event.target.style['object-fit'] = 'contain';
  }

  /** 取得所有客制清單 */
  getCustomList(): void {
    this.customListSvc.getCustomlist().pipe(takeUntil(this.ngUnsubscribe)).subscribe((res) => this.customList = res);
  }

  /** 加到客製清單 */
  addToCustom(listInfo: ICustomList): void {
    if (!listInfo) { return; }
    const sendData = {
      timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
      title: this.movie.title,
      id: this.movie.id.toString(),
      isWatched: false
    };
    this.customListSvc.addToCustomeList(listInfo.id, sendData).then(() => {
      this.nzMsgSvc.success(`已加入${listInfo.subject}`);
    });
  }

  /**
   * 新增 or 查看評語
   */
  onPositiveClick(movie: IMovieInfo): void {
    const modal = this.modalSvc.create({
      nzContent: CommentComponent,
      nzComponentParams: { movie, isWatched: this.isWatched },
      nzFooter: null,
      nzBodyStyle: { padding: '24px' },
    });
  }




  /**
   * 加到最愛
   */
  handleAdd(): void {
    const sendData = {
      timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
      title: this.movie.title,
      id: this.movie.id,
      isWatched: false
    };
    if (this.isFavorite) {
      this.listHandleSvc.removeFavorite(this.movie.id);
      this.isFavorite = false;
      this.msgSvc.handleAddAction('我的最愛', this.isFavorite);
    } else {
      this.listHandleSvc.addToFavorite(sendData);
      this.isFavorite = true;
      this.msgSvc.handleAddAction('我的最愛', this.isFavorite);
    }

  }

  removeFromWatchList(movie: IMovieInfo): void {
    this.listHandleSvc.removeFromWatchList(movie.id);
    this.msgSvc.handleAddAction('待播清單', false);
  }
}
