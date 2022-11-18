import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { ROUTING_PATH } from 'src/app/core/consts/routing-path.const';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: IMovieInfo;
  @Output() refreshList = new EventEmitter();
  ROUTING_PATH = ROUTING_PATH;

  // 海報網址
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
