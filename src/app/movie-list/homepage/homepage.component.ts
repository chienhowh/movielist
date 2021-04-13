import { Component, OnInit } from '@angular/core';
import { MovieRequestService } from 'src/app/core/services/movie-request.service';
import { API } from '../consts/global-constants.const';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  searchText = 'av';
  constructor(
    private movieRequestService: MovieRequestService
  ) { }
  ngOnInit(): void {
    this.getGenreList();
  }



  getGenreList(): void {
    this.movieRequestService.request(API.GET, API.GENRE_LIST).subscribe(res => {
      sessionStorage.setItem('genres', JSON.stringify([...res.genres]));
    });
  }

  searchMovie() {
    const sendData = {query:this.searchText}
    this.movieRequestService.request(API.GET, API.SEARCH_KEYWORD,sendData).subscribe(
      res => console.log(res)
    )
  }
}
