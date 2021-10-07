import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject, from, Observable, iif, EMPTY } from 'rxjs';
import { takeUntil, concatMap, filter, tap, map } from 'rxjs/operators';
import { API_POSTER, API } from 'src/app/core/consts/global-constants.const';
import { EitherWatch, ListType } from 'src/app/core/enums/list-type.enum';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { MovieRequestService } from 'src/app/core/services/movie-request.service';
import { WatchlistService } from 'src/app/core/services/watchlist.service';
import { DetailService } from 'src/app/movie-list/homepage/shared/detail.service';
import { IWatchedMovie } from '../../shared/watchlist';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-either-watch',
  templateUrl: './either-watch.component.html',
  styleUrls: ['./either-watch.component.scss']
})
export class EitherWatchComponent implements OnInit, OnDestroy {

  API_POSTER = API_POSTER;
  /** 清單 api */
  endpoint: string;
  name: string;
  /** 已看 || 未看 */
  type: EitherWatch;
  displayList: IMovieInfo[] = [];
  unsubscribe = new Subject();
  constructor(
    private watchlistService: WatchlistService,
    private mvReqSvc: MovieRequestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      this.endpoint = res.endpoint;
      this.name = res.name;
      this.type = +res.type; // 要把query param轉回數字
      this.displayList = [];
      this.getWatchList();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.unsubscribe();
  }

  getWatchList(): void {
    this.watchlistService.getWatchLists(this.endpoint).subscribe(res => {
      let seachMovies = [];
      if (+this.type === EitherWatch.BEENWATCHED) {
        seachMovies = res.filter(m => m.beenWatched);
      } else {
        seachMovies = res.filter(m => !m.beenWatched);
      }
      from(seachMovies).pipe(
        concatMap((mv: any) => this.searchMovieById(mv.id)),
      ).subscribe(list => {
        this.displayList.push(list);
      });
    });
  }

  /**
   * 用ID 摳詳細資訊
   */
  searchMovieById(id: number): Observable<any> {
    return this.mvReqSvc.request(API.GET, `${API.MOVIE}/${id}`);
  }

  /**
   * 新增 or 查看評語
   */
  // onPositiveClick(movie: IWatchedMovie, type: string): void {
  //   this.modalService.create({
  //     nzContent: CommentComponent,
  //     nzComponentParams: { movie, type },
  //     nzFooter: null,
  //     nzBodyStyle: { padding: '24px' },
  //     nzOnOk: () => {
  //       this.getWatchList();
  //     }
  //   });
  // }

  refreshList(): void {
    this.displayList = [];
    this.getWatchList();
  }



}
