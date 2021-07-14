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
      // 先轉treenode
      const treeNodes = res.map((movie: IWatchedMovie) => ({ ...movie, key: movie.id, isLeaf: true }));
      this.displayList.watchedList = treeNodes.filter(movie => movie.beenWatched);
      this.displayList.unWatchedList = treeNodes.filter(movie => !movie.beenWatched);
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
    });
  }


  removeList(id: number, event: Event): void {
    event.stopPropagation();
    this.detailService.removeList(id).subscribe(() => this.getWatchList());
  }

  nzEvent(event: NzFormatEmitEvent, type: string): void {
    // 電影資料
    const movie = event.node.origin as unknown as IWatchedMovie;
    this.onPositiveClick(movie, type);

  }
}
