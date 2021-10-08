import { ActivatedRoute } from '@angular/router';
import { MovieRequestService } from 'src/app/core/services/movie-request.service';
import { WatchlistService } from 'src/app/core/services/watchlist.service';
import { Component, OnInit } from '@angular/core';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { from, Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { API } from 'src/app/core/consts/global-constants.const';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {
  endpoint: string;
  /** 客制表單id */
  customId: number;
  title;
  displayList: IMovieInfo[] = [];
  constructor(
    private watchlistSvc: WatchlistService,
    private mvReqSvc: MovieRequestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(res => {
      this.endpoint = res.endpoint;
      this.customId = res.id;
      let url = '';
      if (this.customId) {
        url = `${res.endpoint}/${res.id}`;
      } else {
        url = res.endpoint;
      }
      this.getWatchList(url);
    });
  }


  getWatchList(url: string): void {
    this.displayList = [];
    this.watchlistSvc.getWatchLists(url).subscribe(res => {
      // 客制清單
      if (this.customId) {
        this.title = res[3];
        from(res[0]).pipe(
          concatMap((id: any) => this.searchMovieById(id)),
        ).subscribe(list => {
          this.displayList.push(list);
        });
      } else {
        this.title = '我的最愛';
        // my favorite
        from(res).pipe(
          concatMap((mv: any) => this.searchMovieById(mv.id)),
        ).subscribe(list => {
          this.displayList.push(list);
        });
      }
    });
  }

  /**
   * 用ID 摳詳細資訊
   */
  searchMovieById(id: number): Observable<any> {
    return this.mvReqSvc.request(API.GET, `${API.MOVIE}/${id}`);
  }


}
