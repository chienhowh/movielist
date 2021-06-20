import { MovieRequestService } from './../../../core/services/movie-request.service';
import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { API, API_POSTER } from '../../consts/global-constants.const';
import { IMovieInfo, IResponse } from '../../../core/interfaces/movie.interface';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {
  /**
   * 此表單標題
   */
  @Input() searchTitle;
  @Input() searchApi: string;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.countImgNumber();
  }

  API_POSTER = API_POSTER;
  movieList$: Observable<any[]>;
  imgNumber: number;
  constructor(
    public dialog: MatDialog,
    private movieRequestService: MovieRequestService,
  ) { }

  ngOnInit(): void {
    this.countImgNumber();
    this.movieList$ = this.movieRequestService.request(API.GET, `/movie/${this.searchApi}`)
      .pipe(map(res => [...res.results]));
    console.log(this.imgNumber);

  }

  countImgNumber() {
    const width = window.innerWidth;
    if (width >= 1200) {
      this.imgNumber = Math.floor((width - 74) / 140); // 扣掉兩邊跟圖片之間padding
    } else {
      this.imgNumber = Math.floor((width - 14) / 140);
    }
  }

  /**
   * 跳出顯示電影詳情視窗
   * 資料不完全所以movieDetail要再用id call一次
   */
  onWatchDetail(info): void {
    const dialogRef = this.dialog.open(MovieDetailComponent, {
      width: '500px', data: { info, callAgain: true }
    });

    dialogRef.afterClosed().subscribe(res => console.log('this diaglo was closed' + res));
  }


}
