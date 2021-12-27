import { ListHandleService } from './../../../../core/services/list-handle.service';
import { ActivatedRoute } from '@angular/router';
import { MovieRequestService } from 'src/app/core/services/movie-request.service';
import { WatchlistService } from 'src/app/core/services/watchlist.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { from, Observable, Subject } from 'rxjs';
import { concatMap, takeUntil } from 'rxjs/operators';
import { API } from 'src/app/core/consts/global-constants.const';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit, OnDestroy {

  /** customlist id(favorite:undefined) */
  customId: string;
  title: string;
  desc: string;
  fsList: any[] = [];
  displayList: IMovieInfo[] = [];

  ngUnsubscribe = new Subject();
  constructor(
    private mvReqSvc: MovieRequestService,
    private route: ActivatedRoute,
    private listHandleSvc: ListHandleService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => {
      this.customId = res.id;
      // 拿自訂清單by id
      if (this.customId) {
        this.listHandleSvc.getSpecList(this.customId).pipe(takeUntil(this.ngUnsubscribe)).subscribe(lists => {
          this.fsList = lists;
          this.getWatchList();
        });
        this.listHandleSvc.getSpecFields(this.customId).subscribe(i => {
          this.title = i.subject;
          this.desc = i.desc;
        });
      } else {
        this.listHandleSvc.getFromFavorite().pipe(takeUntil(this.ngUnsubscribe)).subscribe((lists: any[]) => {
          this.fsList = lists;
          this.title = '我的最愛';
          this.desc = '';
          this.getWatchList();
        });
      }
    });
  }


  getWatchList(): void {
    this.displayList = [];
    from(this.fsList).pipe(
      concatMap(({ id }) => this.searchMovieById(id))
    ).subscribe(info => this.displayList.push(info));
    if (!this.customId) { this.title = '我的最愛'; }
  }

  /**
   * 用ID 摳詳細資訊
   */
  searchMovieById(id: number): Observable<any> {
    return this.mvReqSvc.request(API.GET, `${API.MOVIE}/${id}`);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }
}
