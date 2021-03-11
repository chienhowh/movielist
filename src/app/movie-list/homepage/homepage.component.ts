import { Component, OnInit } from '@angular/core';
import { MovieRequestService } from 'src/app/core/services/movie-request.service';
import { API } from '../consts/global-constants.const';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  slides = [
    { 'image': 'https://picsum.photos/id/237/200/300' },
    { 'image': 'https://picsum.photos/id/111/200/300' },
    { 'image': 'https://picsum.photos/id/237/200/300' },
    { 'image': 'https://picsum.photos/id/237/200/300' },
    { 'image': 'https://picsum.photos/id/981/200/300' },
  ]
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
}
