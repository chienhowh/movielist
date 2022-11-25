import { API } from 'src/app/core/consts/global-constants.const';
import { MovieRequestService } from 'src/app/core/services/movie-request.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IMovieInfo, IResponse } from 'src/app/core/interfaces/movie.interface';
import { Paging } from 'src/app/model/paging';

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.scss']
})
export class GenrePageComponent implements OnInit {
  displayList: IMovieInfo[] = [];
  page: Paging = new Paging();
  constructor(
    private route: ActivatedRoute,
    private movieReqSvc: MovieRequestService
  ) { }

  ngOnInit(): void {
    this.getGenreMovies();
  }

  getGenreMovies(page = 1) {
    const genreId = this.route.snapshot.paramMap.get('genreId');
    if (!genreId) { return; }
    this.movieReqSvc.get<IResponse>(API.DISCOVER, { with_genres: genreId, page: page }).subscribe(res => {
      this.page.totalResults = res.total_results;
      this.displayList = res.results;
    });
  }
}
