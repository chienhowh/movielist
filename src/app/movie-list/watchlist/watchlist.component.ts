import { DetailService } from './../homepage/shared/detail.service';
import { WatchlistService } from './watchlist.service';
import { API_POSTER } from './../consts/global-constants.const';
import { Component, OnInit } from '@angular/core';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  API_POSTER = API_POSTER;
  /** 電影詳細資料列表 */
  displayList: IMovieInfo[] = [];
  /** 待播清單號碼 */
  watchList = [];

  constructor(
    private watchlistService: WatchlistService,
    private detailService: DetailService
  ) { }

  ngOnInit() {
    this.getWatchList();
    // this.watchLists.map(list => this.getDetailById(list));
  }



  getWatchList() {
    this.watchlistService.getWatchLists().subscribe(res => {
      this.watchList = res;
      this.watchList.map(list => this.getDetailById(list.id))
    })
  }
  getDetailById(id: number) {
    this.detailService.getMovieDetail(id).subscribe(res => {
      this.displayList.push(res);
    });
  }
}
