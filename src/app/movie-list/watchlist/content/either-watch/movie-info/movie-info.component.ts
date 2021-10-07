import { MessageService } from './../../../../../core/services/message.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DetailService } from 'src/app/movie-list/homepage/shared/detail.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { API_POSTER } from 'src/app/core/consts/global-constants.const';
import { EitherWatch, ListType } from 'src/app/core/enums/list-type.enum';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { MovieDetailComponent } from 'src/app/movie-list/homepage/movie-detail/movie-detail.component';
import { IWatchedMovie } from '../../../shared/watchlist';
import { CommentComponent } from '../../comment/comment.component';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  @Input() movie: IMovieInfo;
  /** 已看 || 未看 */
  @Input() type: EitherWatch;
  @Output() refreshList = new EventEmitter();
  // 海報網址
  API_POSTER = API_POSTER;
  inFavorite = false;
  constructor(
    private modalSvc: NzModalService,
    private detailSvc: DetailService,
    private msgSvc: MessageService,
  ) { }

  ngOnInit(): void {
    this.detailSvc.readListById(this.movie.id, ListType.FAVORITE).subscribe(res => this.inFavorite = !!res);

  }

  /**
   * 跳出顯示電影詳情視窗
   *
   */
  onWatchDetail(info: IMovieInfo): void {
    this.modalSvc.create({
      nzContent: MovieDetailComponent,
      nzComponentParams: {
        info
      },
      nzFooter: null,
      nzBodyStyle: { padding: '24px' },
    });
  }

  imgError(event): void {
    event.target.src = 'assets/not-found.jpeg';
    event.target.style['object-fit'] = 'contain';
  }



  /**
   * 新增 or 查看評語
   */
  onPositiveClick(movie: IMovieInfo, type: EitherWatch): void {
    this.modalSvc.create({
      nzContent: CommentComponent,
      nzComponentParams: { movie, type },
      nzFooter: null,
      nzBodyStyle: { padding: '24px' },
      nzOnOk: () => {
        this.refreshList.emit();
      }
    });
  }




  /**
   * 加到最愛
   */
  handleAdd(): void {
    const sendData = {
      title: this.movie.title,
      addTime: new Date().valueOf(),
      beenWatched: false,
      id: this.movie.id
    };
    if (this.inFavorite) {
      this.detailSvc.removeList(this.movie.id, ListType.FAVORITE).subscribe(res => {
        this.inFavorite = false;
        this.msgSvc.handleAddAction('我的最愛', this.inFavorite);
      });
    } else {
      this.detailSvc.addtoList(this.movie.id, ListType.FAVORITE, sendData).subscribe(res => {
        this.inFavorite = true;
        this.msgSvc.handleAddAction('我的最愛', this.inFavorite);
      });


    }
  }

  removeFromList(movie: IMovieInfo): void {
    this.detailSvc.removeList(movie.id, ListType.WATCHLIST).subscribe(() => {
      this.msgSvc.handleAddAction('我的最愛', false);
      this.refreshList.emit();
    });
  }
}
