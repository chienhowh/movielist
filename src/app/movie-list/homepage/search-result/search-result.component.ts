import { NzModalService } from 'ng-zorro-antd/modal';
import { API_POSTER } from './../../consts/global-constants.const';
import { IMovieInfo, IResponse, IKeyword } from './../../../core/interfaces/movie.interface';

import { MovieRequestService } from './../../../core/services/movie-request.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API } from '../../consts/global-constants.const';
import { Paging } from '../../../model/paging';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';



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
  page: Paging = new Paging();
  paginator = [];
  showPaginator = [];
  constructor(
    private modalService: NzModalService,
    private router: Router,
    private movieRequestService: MovieRequestService
  ) { }

  ngOnInit(): void {
    this.query = history.state.query;
    if (!this.query) { this.router.navigateByUrl('/'); }
    this.searchQuery();
  }
  ngAfterViewInit(): void {
  }

  /**
   * 針對字串搜尋符合電影列表
   */
  searchQuery() {
    if (!this.query.trim()) { return; }
    const sendData = { query: this.query.trim(), page: this.page.pageIndex };
    this.movieRequestService.request(API.GET, API.SEARCH_MOVIE, sendData).subscribe((res: IResponse) => {
      const details = res.results;
      this.page.totalResults = res.total_results;
      this.displayList = [];
      console.log('page.totalPages', this.page.totalPages);

      // 避免重複塞矩陣
      if (!this.page.beenSearched) {
        console.warn('push array');
        for (let i = 0; i < this.page.totalPages; i++) {
          this.paginator.push({ pageIndex: i + 1 });
        }
        this.page.beenSearched = true;
      }
      console.log(this.paginator);
      this.setShowPaginator(this.page.pageIndex);

      details.forEach(movie => {
        this.searchMovieById(movie);
      });
    });
  }

  /**
   * 用ID 摳詳細資訊
   */
  searchMovieById(movie: IKeyword) {
    this.movieRequestService.request(API.GET, `${API.MOVIE}/${movie.id}`).subscribe(
      detail => {
        this.displayList.push(detail);
      },
      err => console.log('err:', err)
    );
  }

  // page start
  /** 換頁 */
  changePage(pageIndex: number): void {
    if (pageIndex < 1 || pageIndex > this.page.totalPages) {
      console.log('invalid page');
      return;
    }
    this.page.pageIndex = pageIndex;
    this.searchQuery();
    window.scrollTo({ top: 0 }); // 回到上層
  }
  /** 顯示paginator */
  setShowPaginator(pageIndex: number) {
    this.showPaginator = [];
    console.log(this.paginator);
    // 不到五頁
    if (this.page.totalPages <= 5 || pageIndex < 4) {
      this.showPaginator = this.paginator.slice(0, 5);
    } else if (this.page.totalPages - pageIndex < 5) {
      this.showPaginator = this.paginator.slice(-5);
    } else {
      this.showPaginator = this.paginator.slice(pageIndex - 3, pageIndex + 2);
    }
    console.log(this.showPaginator);


    if (this.page.totalPages - pageIndex >= 5) {
      this.showPaginator.push({ pageIndex: 'dot' });
    }
    if (pageIndex >= 4 && this.page.totalPages >= 5) {
      this.showPaginator.unshift({ pageIndex: 'dot' });
    }
  }

  onSearch(){
    this.page.initialize();
    this.searchQuery();
  }

  /**
   * 跳出顯示電影詳情視窗
   *
   */
  onWatchDetail(info: IMovieInfo): void {
    this.modalService.create({
      nzContent: MovieDetailComponent,
      nzComponentParams: {
        info, callAgain: false
      },
      nzFooter: null,
      nzBodyStyle: { padding: '24px' },
    });
  }

  imgError(event) {
    event.target.src = 'assets/not-found.jpeg';
    event.target.style['object-fit'] = 'contain';
  }

  searchMovie() {
    this.searchQuery();
  }
}
