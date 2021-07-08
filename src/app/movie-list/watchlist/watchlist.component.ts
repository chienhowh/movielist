import { NzModalService } from 'ng-zorro-antd/modal';
import { WatchedMovieComponent } from './watched-movie/watched-movie.component';
import { CommentComponent } from './comment/comment.component';
import { DetailService } from './../homepage/shared/detail.service';
import { WatchlistService } from './watchlist.service';
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
  /** 電影詳細資料列表 */
  displayList: IMovieInfo[] = [];
  /** 待播清單號碼 */
  unWatchedList: IWatchedMovie[] = [];
  watchedList: IWatchedMovie[] = [];



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
    this.refreshList();
    this.watchlistService.getWatchLists().subscribe((res: IWatchedMovie[]) => {
      res.map(movie => {
        if (movie.beenWatched) { this.watchedList.push(movie); }
        else { this.unWatchedList.push(movie); }
      });
    });
  }

  /** 查心得 */
  getDetailById(id: number) {
    const dialogRef = this.dialog.open(WatchedMovieComponent, {
      width: '500px', data: { id }
    });

    dialogRef.afterClosed().subscribe(res => console.log('this diaglo was closed' + res));
  }

  writeComment(movie: IWatchedMovie): void {
    this.modalService.create({
      nzContent: CommentComponent,
      nzComponentParams: { movie },
      nzFooter: null,
      nzBodyStyle: { padding: '24px' },
    })

    // dialogRef.afterClosed().subscribe(res => {
    //   if (res) { this.getWatchList(); }
    // });
  }


  removeList(id: number, event: Event) {
    event.stopPropagation();
    this.detailService.removeList(id).subscribe(() => this.getWatchList());
  }

  refreshList() {
    this.watchedList = [];
    this.unWatchedList = [];
  }
}
