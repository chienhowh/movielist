import { API_POSTER } from './../../consts/global-constants.const';
import { IMovieInfo, IResponse, IKeyword } from './../../../core/interfaces/movie.interface';

import { MovieRequestService } from './../../../core/services/movie-request.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API } from '../../consts/global-constants.const';
import { Page } from '../../../model/page';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { PageEvent } from '@angular/material/paginator';



@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, AfterViewInit {
  // 搜尋字串
  query: string;
  // 海報網址
  API_POSTER = API_POSTER;
  displayList: IMovieInfo[] = [];
  page = new Page();
  pageEvent: PageEvent;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private movieRequestService: MovieRequestService
  ) { }

  ngOnInit(): void {
    this.query = history.state.query;
    this.searchQuery();
  }
  ngAfterViewInit(): void {
  }

  /**
   * 針對字串搜尋符合電影列表
   */
  searchQuery() {
    const sendData = { query: 'a', page: this.page.paging };
    this.movieRequestService.request(API.GET, API.SEARCH_KEYWORD, sendData).subscribe(
      (res: IResponse) => {
        const details = res.results;
        this.page.total_results = res.total_results;
        this.displayList = [];
        details.forEach(movie => {
          this.searchMovieById(movie);
        });
      }
    );
  }

  /**
   * 用ID 摳詳細資訊
   */
  searchMovieById(movie: IKeyword) {
    this.movieRequestService.request(API.GET, `${API.MOVIE}/${movie.id}`, { language: 'en-US' }).subscribe(
      detail => {
        this.displayList.push(detail);
      },
      err => console.log('err:', err)
    );
  }

  changePage(pageEvent: PageEvent) {
    this.page.paging = pageEvent.pageIndex;
    this.searchQuery();
    window.scrollTo({ top: 0 }); // 回到上層
  }

  /**
   * 跳出顯示電影詳情視窗
   *
   */
  onWatchDetail(info: IMovieInfo): void {
    const dialogRef = this.dialog.open(MovieDetailComponent, {
      width: '500px', data: { info, callAgain: false }
    });
    dialogRef.afterClosed().subscribe(res => console.log('this diaglo was closed' + res));
  }
}
