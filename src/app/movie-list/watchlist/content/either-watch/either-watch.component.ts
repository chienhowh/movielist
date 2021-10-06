import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject, from, Observable } from 'rxjs';
import { takeUntil, concatMap } from 'rxjs/operators';
import { API_POSTER, API } from 'src/app/core/consts/global-constants.const';
import { ListType } from 'src/app/core/enums/list-type.enum';
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
  /** 清單類型 */
  name: string;
  displayList: IMovieInfo[] = [];
  unsubscribe = new Subject();
  constructor(
    private watchlistService: WatchlistService,
    private mvReqSvc: MovieRequestService,
    private detailService: DetailService,
    private modalService: NzModalService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      this.endpoint = res.endpoint;
      this.name = res.name;
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
      console.log(res);
      from(res).pipe(
        concatMap((mv: any) => this.searchMovieById(mv.id))).subscribe(list => {
          this.displayList.push(list);
          console.log(this.displayList);
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
  onPositiveClick(movie: IWatchedMovie, type: string): void {
    this.modalService.create({
      nzContent: CommentComponent,
      nzComponentParams: { movie, type },
      nzFooter: null,
      nzBodyStyle: { padding: '24px' },
      nzOnOk: () => {
        this.getWatchList();
      }
    });
  }


  removeList(id: number, event: Event): void {
    event.stopPropagation();
    this.detailService.removeList(id, ListType.WATCHLIST).subscribe(() => this.getWatchList());
  }

}
