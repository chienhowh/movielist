import { API_POSTER } from './../../consts/global-constants.const';
import { IMovieInfo } from './../../../core/interfaces/movie.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  API_POSTER = API_POSTER;

  constructor(
    public dialogRef: MatDialogRef<MovieDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { info: IMovieInfo }
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }
  closeDialog() {
    this.dialogRef.close('sushi');
  }
}
