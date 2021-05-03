import { MovieRequestService } from './../../../core/services/movie-request.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { API, API_POSTER } from '../../consts/global-constants.const';
import { IMovieInfo, IResponse } from '../../../core/interfaces/movie.interface';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  /**
   * 此表單標題
   */
  @Input() searchTitle;
  @Input() searchApi: string;
  API_POSTER = API_POSTER;
  movieList$: Observable<any[]>;
  constructor(
    public dialog: MatDialog,
    private movieRequestService: MovieRequestService,
  ) { }

  ngOnInit(): void {
    this.movieList$ = this.movieRequestService.request(API.GET, `/movie/${this.searchApi}`)
      .pipe(map(res => [...res.results]));
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
