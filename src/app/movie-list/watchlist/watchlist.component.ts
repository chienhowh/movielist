import { WatchlistService } from './../../core/services/watchlist.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CommentComponent } from './comment/comment.component';
import { DetailService } from './../homepage/shared/detail.service';
import { API_POSTER } from './../consts/global-constants.const';
import { Component, OnInit } from '@angular/core';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { IWatchedMovie } from './shared/watchlist';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  API_POSTER = API_POSTER;
  displayList: {
    unWatchedList: IWatchedMovie[],
    watchedList: IWatchedMovie[]
  } = {
      unWatchedList: [],
      watchedList: []
    }


  tabList = [
    { title: '尚未觀看', list: 'unWatchedList' },
    { title: '已經觀看', list: 'watchedList' }
  ]

  constructor(
    private watchlistService: WatchlistService,
    private detailService: DetailService,
    public dialog: MatDialog,
    private modalService: NzModalService
  ) { }

  ngOnInit() {
    this.getWatchList();
  }



  getWatchList() {
    this.watchlistService.getWatchLists().subscribe(res => {
      this.displayList.watchedList = res.filter(movie => movie.beenWatched);
      this.displayList.unWatchedList = res.filter(movie => !movie.beenWatched);
    });
  }


  onPositiveClick(movie: IWatchedMovie, type: string): void {
    this.modalService.create({
      nzContent: CommentComponent,
      nzComponentParams: { movie, type },
      nzFooter: null,
      nzBodyStyle: { padding: '24px' },
      nzOnOk: () => {
        this.getWatchList();
      }
    })
  }


  removeList(id: number, event: Event) {
    event.stopPropagation();
    this.detailService.removeList(id).subscribe(() => this.getWatchList());
  }
}
