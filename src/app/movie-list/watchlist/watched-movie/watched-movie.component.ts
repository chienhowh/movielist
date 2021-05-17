import { Observable } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailService } from '../../homepage/shared/detail.service';
import { IWatchedMovie } from '../shared/watchlist';

@Component({
  selector: 'app-watched-movie',
  templateUrl: './watched-movie.component.html',
  styleUrls: ['./watched-movie.component.scss']
})
export class WatchedMovieComponent implements OnInit {
  id: number;
  $movie: Observable<IWatchedMovie>;

  constructor(
    public dialogRef: MatDialogRef<WatchedMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private detailService: DetailService
  ) { }

  ngOnInit(): void {
    this.id = this.data.id;
    this.$movie = this.detailService.readList(this.id);
  }
}
