import { ROUTING_PATH } from './../../../core/consts/routing-path.const';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IMovieInfo } from './../../../core/interfaces/movie.interface';
import { Component, Input, OnInit } from '@angular/core';
import { MovieDetailComponent } from 'src/app/movie-list/homepage/movie-detail/movie-detail.component';
import { API_POSTER } from 'src/app/core/consts/global-constants.const';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.scss']
})
export class VerticalCardComponent implements OnInit {
  @Input() movie: IMovieInfo;
  API_POSTER = API_POSTER;
  constructor(
    private modalSvc: NzModalService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  /**
   * 跳出顯示電影詳情視窗
   * 資料不完全所以movieDetail要再用id call一次
   */
  onWatchDetail(movie): void {
    this.router.navigate(['/', ROUTING_PATH.MOVIE, movie.id]);
  }
}
