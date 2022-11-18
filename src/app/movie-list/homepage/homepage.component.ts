import { ROUTING_PATH } from './../../core/consts/routing-path.const';
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
    private router: Router
  ) { }
  ngOnInit(): void {
  }





  searchMovie(event?): void {
    if (!this.searchText.trim()) { return; }
    this.router.navigate([ROUTING_PATH.HOME, ROUTING_PATH.SEARCH], { state: { query: this.searchText } });
  }

  onSwiper(swiper): void {
  }
  onSlideChange(): void {
  }
}
