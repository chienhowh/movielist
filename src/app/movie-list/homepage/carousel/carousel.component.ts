import { MovieRequestService } from './../../../core/services/movie-request.service';
import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { API, API_POSTER } from '../../consts/global-constants.const';
import { IMovieInfo, IResponse } from '../../../core/interfaces/movie.interface';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { NzModalService } from 'ng-zorro-antd/modal';
SwiperCore.use([Pagination, Navigation]);


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {
  API_POSTER = API_POSTER;
  movieList$: Observable<any[]>;
  imgNumber: number;
  /**
   * 此表單標題
   */
  @Input() searchTitle;
  @Input() searchApi: string;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.countImgNumber();
  }


  constructor(
    private movieRequestService: MovieRequestService,
    private modalService: NzModalService
  ) { }

  ngOnInit(): void {
    this.countImgNumber();
    this.movieList$ = this.movieRequestService.request(API.GET, `/movie/${this.searchApi}`)
      .pipe(map(res => [...res.results]));
  }

  countImgNumber(): void {
    const width = window.innerWidth;
    if (width >= 1200) {
      // this.imgNumber = Math.floor((width - 74) / 140); // 扣掉兩邊跟圖片之間padding
      this.imgNumber = 9;
    } else {
      this.imgNumber = Math.floor((width - 14) / 140);
    }
  }

  /**
   * 跳出顯示電影詳情視窗
   * 資料不完全所以movieDetail要再用id call一次
   */
  onWatchDetail(info): void {
    this.modalService.create({
      nzContent: MovieDetailComponent,
      nzComponentParams: {
        info, callAgain: true
      },
      nzFooter: null,
      nzBodyStyle: { padding: '24px' },
    });
  }


}
