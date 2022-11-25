import { DEVICE } from './../../core/consts/device.const';
import { SharedService } from './../../shared/shared.service';
import { IResponse } from './../../core/interfaces/movie.interface';
import { MovieRequestService } from './../../core/services/movie-request.service';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { API } from 'src/app/core/consts/global-constants.const';

@Component({
  selector: 'app-specific-type',
  templateUrl: './specific-type.component.html',
  styleUrls: ['./specific-type.component.scss']
})
export class SpecificTypeComponent implements OnInit {
  @ViewChild('specific') specific: ElementRef;
  DEVICE = DEVICE;
  /** current device */
  device: DEVICE;
  type: string;
  currentPage = 1;

  displayList: IMovieInfo[] = [];
  searchFilter: any;

  /** 是否開放滑動增加 */
  isScrollMore = false;
  /** 滑動頁是否載入完成 */
  loaded = false;



  @HostListener('window:scroll', ['$event'])
  private onScroll($event): void {
    const clientHeight = $event.target.documentElement.clientHeight;
    const scrollTop = $event.target.documentElement.scrollTop;
    const scrollHeight = $event.target.documentElement.scrollHeight;

    if (this.isScrollMore && this.loaded) {
      if (scrollHeight - scrollTop - clientHeight < clientHeight * 0.3) {
        this.loaded = false;
        this.onSubmit(this.currentPage + 1);
      }
    }
  }
  constructor(
    private mvReqSvc: MovieRequestService,
    private sharedSvc: SharedService
  ) { }

  ngOnInit(): void {
    this.device = this.sharedSvc.UserDeviceSubject;
    console.log(this.device);
  }

  searchMovieHandler(filterOpts: any): void {
    this.searchFilter = filterOpts;
    this.onSubmit(1);
  }

  onSubmit(page: number): void {
    this.currentPage = page;
    const reqBody = { ...this.searchFilter, page };
    console.log(reqBody);
    this.getMovies(page, reqBody);
  }


  // TODO:選項跟日期讀不到
  getMovies(page: number, reqBody: any): void {
    if (page === 1) {
      this.isScrollMore = false;
      this.loaded = false;
      this.mvReqSvc.request(API.GET, API.DISCOVER, reqBody).subscribe((res: IResponse) => {
        this.displayList = res.results;
      });
    } else {
      // 第二頁開始變滾動
      this.isScrollMore = true;
      this.mvReqSvc.request(API.GET, API.DISCOVER, reqBody).subscribe((res: IResponse) => {
        this.displayList = this.displayList.concat(res.results);
        this.loaded = true;
      });
    }

  }

}
