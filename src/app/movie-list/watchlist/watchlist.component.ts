import { WatchlistService } from './../../core/services/watchlist.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CommentComponent } from './comment/comment.component';
import { DetailService } from './../homepage/shared/detail.service';
import { API_POSTER } from './../consts/global-constants.const';
import { Component, OnInit } from '@angular/core';
import { IWatchedMovie, WATCHLIST_TYPE } from './shared/watchlist';
import { NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  API_POSTER = API_POSTER;

  /**
   * 待播清單
   */
  displayList: {
    unWatchedList: IWatchedMovie[],
    watchedList: IWatchedMovie[]
  } = {
      unWatchedList: [],
      watchedList: []
    };


  tabList = [
    { title: '尚未觀看', list: 'unWatchedList', type: WATCHLIST_TYPE.NEW },
    { title: '已經觀看', list: 'watchedList', type: WATCHLIST_TYPE.READ }
  ];

  constructor(
    private watchlistService: WatchlistService,
    private detailService: DetailService,
    private modalService: NzModalService
  ) { }

  ngOnInit(): void {
    this.getWatchList();
  }



  getWatchList(): void {
    this.watchlistService.getWatchLists().subscribe(res => {
      // 分類電影
      this.displayList.watchedList = res.filter(movie => movie.beenWatched);
      this.displayList.unWatchedList = res.filter(movie => !movie.beenWatched);
    });
  }

  /**
   * 新增 or 查看評語
   */
  onPositiveClick(movie: IWatchedMovie, type: string): void {
    this.modalService.create({
      nzContent: CommentComponent,
      nzComponentParams: { movie, type },
      nzFooter: null,
      nzBodyStyle: { padding: '24px' },
      nzOnOk: () => {
        this.getWatchList();
      }
    });
  }


  removeList(id: number, event: Event): void {
    event.stopPropagation();
    this.detailService.removeList(id).subscribe(() => this.getWatchList());
  }
}
