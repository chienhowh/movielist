import { NzModalService } from 'ng-zorro-antd/modal';
import { API_POSTER } from '../../../core/consts/global-constants.const';
import { IMovieInfo, IResponse, IKeyword } from './../../../core/interfaces/movie.interface';

import { MovieRequestService } from './../../../core/services/movie-request.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API } from '../../../core/consts/global-constants.const';
import { Paging } from '../../../model/paging';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { from, Observable } from 'rxjs';
import { concatAll, concatMap } from 'rxjs/operators';



@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  // 搜尋字串
  query: string;


  displayList: IMovieInfo[] = [];
  page: Paging = new Paging();
  paginator = [];
  showPaginator = [];
  constructor(
    private router: Router,
    private movieRequestService: MovieRequestService
  ) { }

  ngOnInit(): void {
    this.query = history.state.query;
    if (!this.query) {
      this.router.navigateByUrl('/');
      return;
    }
    this.searchQuery();
  }

  /**
   * 針對字串搜尋符合電影列表
   */
  searchQuery(): void {
    if (!this.query.trim()) { return; }
    const sendData = { query: this.query.trim(), page: this.page.pageIndex };
    this.movieRequestService.request(API.GET, API.SEARCH_MOVIE, sendData).subscribe((res: IResponse) => {
      this.page.totalResults = res.total_results;
      this.displayList = res.results;

      // 避免重複塞矩陣
      if (!this.page.beenSearched) {
        for (let i = 0; i < this.page.totalPages; i++) {
          this.paginator.push({ pageIndex: i + 1 });
        }
        this.page.beenSearched = true;
      }
      this.setShowPaginator(this.page.pageIndex);
    });
  }

  /**
   * 用ID 摳詳細資訊
   */
  searchMovieById(movie: IMovieInfo): Observable<any> {
    return this.movieRequestService.request(API.GET, `${API.MOVIE}/${movie.id}`);
  }

  // page start
  /** 換頁 */
  changePage(pageIndex: number): void {
    if (pageIndex < 1 || pageIndex > this.page.totalPages) {
      return;
    }
    this.page.pageIndex = pageIndex;
    this.searchQuery();
    window.scrollTo({ top: 0 }); // 回到上層
  }
  /** 顯示paginator */
  setShowPaginator(pageIndex: number): void {
    this.showPaginator = [];

    // 不到五頁
    if (this.page.totalPages <= 5 || pageIndex < 4) {
      this.showPaginator = this.paginator.slice(0, 5);
    } else if (this.page.totalPages - pageIndex < 5) {
      this.showPaginator = this.paginator.slice(-5);
    } else {
      this.showPaginator = this.paginator.slice(pageIndex - 3, pageIndex + 2);
    }


    if (this.page.totalPages - pageIndex >= 5) {
      this.showPaginator.push({ pageIndex: 'dot' });
    }
    if (pageIndex >= 4 && this.page.totalPages >= 5) {
      this.showPaginator.unshift({ pageIndex: 'dot' });
    }
  }

  onSearch() {
    this.page.initialize();
    this.searchQuery();
  }


  searchMovie() {
    this.searchQuery();
  }
}
