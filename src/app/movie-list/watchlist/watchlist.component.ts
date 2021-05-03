import { Observable } from 'rxjs';
import { API_POSTER } from './../consts/global-constants.const';
import { DetailService } from './../homepage/shared/detail.service';
import { Component, OnInit } from '@angular/core';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  API_POSTER = API_POSTER;
  displayList: IMovieInfo[] = [];

  watchLists: [] = JSON.parse(sessionStorage.getItem('watchlist'));
  constructor(
    private detailService: DetailService
  ) { }

  ngOnInit() {
    this.watchLists.map(list => this.getDetailById(list));
  }




  getDetailById(id: number) {
    this.detailService.getMovieDetail(id).subscribe(res => {
      this.displayList.push(res);
    });
  }
}
