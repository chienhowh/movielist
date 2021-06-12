import { DetailService } from './../../homepage/shared/detail.service';
import { IWatchedMovie } from './../shared/watchlist';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  movieForm: FormGroup = this.fb.group({
    watchedDate: [new Date(), Validators.required],
    comment: ['', Validators.required]
  });
  movie: IWatchedMovie;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { movie: IWatchedMovie },
    private detailService: DetailService
  ) { }

  ngOnInit(): void {
    this.movie = this.data.movie;
  }

  patchMovie(id: number) {
    const formControls = this.movieForm.controls;
    for (const i in formControls) {
      if (formControls.hasOwnProperty(i)) {
        formControls[i].markAsDirty;
        formControls[i].updateValueAndValidity;
      }
    }
    if (this.movieForm.invalid) { return; }
    const value = this.movieForm.value;
    this.detailService.patchMovie(id, { beenWatched: true, ...value }).subscribe(res =>
      this.dialogRef.close(res)
    );
  }
}
