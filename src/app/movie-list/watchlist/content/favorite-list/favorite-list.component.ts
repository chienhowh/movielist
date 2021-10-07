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
  displayList: IMovieInfo[] = [];
  constructor(
    private watchlistSvc: WatchlistService,
    private mvReqSvc: MovieRequestService
  ) { }

  ngOnInit(): void {
    this.getWatchList();
  }


  getWatchList(): void {
    this.displayList = [];
    this.watchlistSvc.getWatchLists(API.FAVORITE).subscribe(res => {
      from(res).pipe(
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


}
