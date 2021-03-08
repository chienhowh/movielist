import { MovieDetail } from './../classes/movie-detail.class';
import { MovieDetailComponent } from './../movie-detail/movie-detail.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  /**
   * 此表單標題
   */
  @Input() searchTitle;

  movieList: MovieDetail[] = [
    { img: 'https://picsum.photos/500/400?random=11', id: 123456, title: 'Avengers', rate: '83%' },
    { img: 'https://picsum.photos/500/400?random=13', id: 123456, title: 'White Tiger', rate: '90%' },
    { img: 'https://picsum.photos/500/400?random=16', id: 123456, title: 'Fast and Furious', rate: '75%' },
    { img: 'https://picsum.photos/500/400?random=14', id: 123456, title: 'Avengers', rate: '83%' },
    { img: 'https://picsum.photos/500/400?random=15', id: 123456, title: 'Avengers', rate: '83%' },

  ]
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  /**
   * 跳出顯示電影詳情視窗
   */
  onWatchDetail(id: number) {
    const dialogRef = this.dialog.open(MovieDetailComponent, {
      width: '500px', data: { id }
    })

    dialogRef.afterClosed().subscribe(res => console.log('thi diaglo was ' + res))
  }
}
