import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MovieRequestService } from 'src/app/core/services/movie-request.service';
import { API } from '../consts/global-constants.const';


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
    this.getGenreList();
  }



  getGenreList(): void {
    this.movieRequestService.request(API.GET, API.GENRE_LIST).subscribe(res => {
      sessionStorage.setItem('genres', JSON.stringify([...res.genres]));
    });
  }

  searchMovie(event?):void {
    if (!this.searchText.trim()) { return; }
    this.router.navigate(['home', 'search'], { state: { query: this.searchText } });
  }

  onSwiper(swiper) :void{
  }
  onSlideChange():void {
  }
}
