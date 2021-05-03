import { DetailService } from './../shared/detail.service';
import { API_POSTER } from './../../consts/global-constants.const';
import { IMovieInfo } from './../../../core/interfaces/movie.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  API_POSTER = API_POSTER;
  movieId: number;
  displayList:IMovieInfo;
  isInList = true;

  constructor(
    public dialogRef: MatDialogRef<MovieDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { info: IMovieInfo },
    private detailService: DetailService,
    private library: FaIconLibrary
  ) { }

  ngOnInit(): void {
    this.library.addIcons(farHeart, fasHeart);
    this.movieId = this.data.info.id;
    this.getDetailById(this.movieId);
  }

  getDetailById(id: number) {
    this.detailService.getMovieDetail(id).subscribe(res => {
      this.displayList = res;
      console.log(this.displayList);
    });
    // this.displayList = res;
  }

  closeDialog() {
    this.dialogRef.close('sushi');
  }

  addList() {
    alert('add to list');
    this.isInList = !this.isInList;
  }

  getMovieGenres(genres: [{ id: number, name: string }]) {
    return genres.map(genre => genre.name);
  }
}
