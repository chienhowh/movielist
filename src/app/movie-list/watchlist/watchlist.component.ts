import { MovieRequestService } from 'src/app/core/services/movie-request.service';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { ActivatedRoute } from '@angular/router';
import { WatchlistService } from './../../core/services/watchlist.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CommentComponent } from './content/comment/comment.component';
import { DetailService } from './../homepage/shared/detail.service';
import { API, API_POSTER } from '../../core/consts/global-constants.const';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IWatchedMovie, WATCHLIST_TYPE } from './shared/watchlist';
import { NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { ListType } from 'src/app/core/enums/list-type.enum';
import { takeUntil, concatAll, map, concatMap } from 'rxjs/operators';
import { from, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit(): void {
  }


}
