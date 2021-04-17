
import { MovieRequestService } from './../../../core/services/movie-request.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API } from '../../consts/global-constants.const';
import { Page } from '../../../model/page';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  query: string;
  movieList: any[];
  displayList: [];
  page = new Page();
  constructor(
    private router: Router,
    private movieRequestService: MovieRequestService
  ) { }

  ngOnInit(): void {
    this.query = history.state.query;
    this.searchMovie();
  }

  searchMovie() {
    const sendData = { query: this.query, page: this.page.paging };
    this.movieRequestService.request(API.GET, API.SEARCH_KEYWORD, sendData).subscribe(
      (res) => {
        this.movieList = [...res.results];
        console.log(res);
        this.movieList.forEach(movie => {
          this.movieRequestService.request(API.GET, `${API.MOVIE}/${movie.id}`).subscribe(detail => console.log(detail));
        });
      }
    );
  }

  changePage(action: string) {
    if (action === 'previous') {
      this.page.paging--;
    } else {
      this.page.paging++;
    }
    this.searchMovie();
  }
}
