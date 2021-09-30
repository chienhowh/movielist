import { GenresService } from './../../core/services/genres.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MovieRequestService } from 'src/app/core/services/movie-request.service';
import { API } from '../../core/consts/global-constants.const';
import { LOCALSTORAGE_KEY } from 'src/app/core/consts/routing-path.const';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  searchText = '';
  constructor(
    private movieRequestService: MovieRequestService,
    private genreSvc: GenresService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.getGenreList();
  }



  getGenreList(): void {
    this.genreSvc.getGenres().subscribe(res => {
      localStorage.setItem(LOCALSTORAGE_KEY.GENRES, JSON.stringify(res));
    });
  }

  searchMovie(event?): void {
    if (!this.searchText.trim()) { return; }
    this.router.navigate(['home', 'search'], { state: { query: this.searchText } });
  }

  onSwiper(swiper): void {
  }
  onSlideChange(): void {
  }
}
