import { MovieRequestService } from './../../../core/services/movie-request.service';
import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { API, API_POSTER } from '../../../core/consts/global-constants.const';
import { IMovieInfo } from '../../../core/interfaces/movie.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ListType } from '../../../core/enums/list-type.enum';
SwiperCore.use([Pagination, Navigation]);


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {
  API_POSTER = API_POSTER;
  listType = ListType;
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
    this.movieList$ = this.movieRequestService.request<any>(API.GET, `/movie/${this.searchApi}`)
      .pipe(map(res => res.results));
  }

  countImgNumber(): void {
    const width = window.innerWidth;
    if (width >= 1200) {
      // this.imgNumber = Math.floor((width - 74) / 150); // 扣掉兩邊跟圖片之間padding
      this.imgNumber = 7;
    } else {
      this.imgNumber = Math.floor((width - 14) / 150);
    }
  }

  handleOption(listType: ListType, movie: IMovieInfo): void {
    switch (listType) {
      case ListType.FAVORITE:
        break;
      case ListType.WATCHLIST:
        break;
    }
  }

}
