import { BaseComponent } from './../../../../shared/components/base/base.component';
import { ROUTING_PATH } from 'src/app/core/consts/routing-path.const';
import { MovieDetailService } from './../../../../core/services/movie-detail.service';
import { ActivatedRoute } from '@angular/router';
import { MovieRequestService } from 'src/app/core/services/movie-request.service';
import { Component, OnInit } from '@angular/core';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { API } from 'src/app/core/consts/global-constants.const';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent extends BaseComponent implements OnInit {

  /** customlist id(favorite:undefined) */
  customId: string;
  title: string;
  fsList: any[] = [];
  displayList: IMovieInfo[] = [];
  listType: string; // watch or favorite
  constructor(
    private mvReqSvc: MovieRequestService,
    private route: ActivatedRoute,
    private movieDetailSvc: MovieDetailService
  ) {
    super()
  }

  ngOnInit(): void {
    this.listType = this.route.snapshot.url[0].path;
    if (this.listType === ROUTING_PATH.FAVORITE) {
      this.title = 'My Favorite';
      this.getFBMovies(this.listType);
    }
    if (this.listType === ROUTING_PATH.WATCH) {
      this.title = 'My Watchlist';
      this.getFBMovies(this.listType);
    }
  }




  getFBMovies(listType: string) {
    this.movieDetailSvc.getFBMoviesDetail().pipe(
      map(res => res.filter(r => {
        if (listType === ROUTING_PATH.FAVORITE) { return r.isFavorite; }
        if (listType === ROUTING_PATH.WATCH) { return r.isWatchList; }
        return true;
      })),
    ).subscribe((res: any) => {
      console.log('fromfavorite');

      // TODO: 優化這邊的rxjs
      res.forEach(element => {
        this.searchMovieById(element.id).subscribe(info => this.displayList.push(info))
      });
    })
  }

  refreshList() {
    this.displayList = [];
    this.getFBMovies(this.listType);
  }

  /**
   * 用ID 摳詳細資訊
   */
  searchMovieById(id: any): Observable<any> {
    return this.mvReqSvc.request(API.GET, `${API.MOVIE}/${id}`);
  }

}
