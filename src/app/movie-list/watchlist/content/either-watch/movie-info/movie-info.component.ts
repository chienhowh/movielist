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
  constructor(
    private modalSvc: NzModalService,
    private detailSvc: DetailService,
    private msgSvc: NzMessageService
  ) { }

  ngOnInit(): void {
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

  removeFromList(movie: IMovieInfo): void {
    this.detailSvc.removeList(movie.id, ListType.WATCHLIST).subscribe(() => {
      this.msgSvc.info(`已將${movie.title}移出清單`);
      this.refreshList.emit();
    });
  }
}
