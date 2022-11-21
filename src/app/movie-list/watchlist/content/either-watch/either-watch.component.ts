import { ListHandleService } from './../../../../core/services/list-handle.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, from, Observable, } from 'rxjs';
import { takeUntil, mergeMap } from 'rxjs/operators';
import { API_POSTER, API } from 'src/app/core/consts/global-constants.const';
import { EitherWatch } from 'src/app/core/enums/list-type.enum';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { MovieRequestService } from 'src/app/core/services/movie-request.service';

@Component({
  selector: 'app-either-watch',
  templateUrl: './either-watch.component.html',
  styleUrls: ['./either-watch.component.scss']
})
export class EitherWatchComponent implements OnInit, OnDestroy {

  API_POSTER = API_POSTER;
  /** 清單 api */
  name: string;
  /** 已看 || 未看 */
  isWatched: EitherWatch;
  EitherWatch = EitherWatch;
  displayList: IMovieInfo[] = [];
  unsubscribe = new Subject();
  constructor(
    private mvReqSvc: MovieRequestService,
    private route: ActivatedRoute,
    private listHandleSvc: ListHandleService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      this.name = res.name;
      this.isWatched = res.type;
      this.getWatchList();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.unsubscribe();
  }

  getWatchList(): void {
    this.listHandleSvc.getFromWatchList().pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(res => {
      this.displayList = [];
      const movies = res.filter(m => {
        if (this.isWatched === EitherWatch.BEENWATCHED) { return m.isWatched; }
        else { return !m.isWatched; }
      });
      from(movies).pipe(mergeMap((mv: any) => this.searchMovieById(mv.id))).subscribe(info =>
        this.displayList.push(info)
      );
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
