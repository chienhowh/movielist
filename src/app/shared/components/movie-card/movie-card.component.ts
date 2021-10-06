import { NzModalService } from 'ng-zorro-antd/modal';
import { Component, Input, OnInit } from '@angular/core';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { MovieDetailComponent } from 'src/app/movie-list/homepage/movie-detail/movie-detail.component';
import { API_POSTER } from 'src/app/core/consts/global-constants.const';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: IMovieInfo;

  // 海報網址
  API_POSTER = API_POSTER;
  constructor(
    private modalSvc: NzModalService
  ) { }

  ngOnInit(): void {
    console.log(this.movie);

  }

  /**
   * 跳出顯示電影詳情視窗
   *
   */
  onWatchDetail(info: IMovieInfo): void {
    this.modalSvc.create({
      nzContent: MovieDetailComponent,
      nzComponentParams: {
        info
      },
      nzFooter: null,
      nzBodyStyle: { padding: '24px' },
    });
  }

  imgError(event) {
    event.target.src = 'assets/not-found.jpeg';
    event.target.style['object-fit'] = 'contain';
  }

}
