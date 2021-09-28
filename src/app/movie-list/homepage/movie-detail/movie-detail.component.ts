import { ListType } from './../../../core/enums/list-type.enum';
import { MessageService } from './../../../core/services/message.service';
import { DetailService } from './../shared/detail.service';
import { API_POSTER } from './../../consts/global-constants.const';
import { IMovieInfo } from './../../../core/interfaces/movie.interface';
import { Component, Input, OnInit } from '@angular/core';
import { tify, sify } from 'chinese-conv';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() info;
  /* 取得資料是否完全，不完全則callAgain true */
  @Input() callAgain: boolean;
  API_POSTER = API_POSTER;
  movieId: number;
  displayList: IMovieInfo;
  /** 清單類別 */
  ListType = ListType;
  isInList = false;
  inFavorite = false;
  inWatchlist = false;
  listMap = [
    { header: '類型', key: 'genres' },
    { header: '上映日期', key: 'release_date' },
    { header: '評分', key: 'vote_average' },
    { header: '片長', key: 'runtime' },
  ];

  constructor(
    private detailService: DetailService,
    public modalRef: NzModalRef,
    private msgSvc: MessageService
  ) { }

  ngOnInit(): void {
    this.movieId = this.info.id;
    if (this.callAgain) {
      this.getDetailById(this.movieId);
    } else {
      this.displayList = this.info;
      this.searchInList(this.movieId);
    }
  }

  getDetailById(id: number): void {
    this.detailService.getMovieDetail(id).subscribe(res => {
      this.displayList = res;
    });
    this.searchInList(id);
  }



  /** click icon to addlist */
  addList(detail: IMovieInfo): void {
    const { id, title } = detail;
    const sendData = {
      title,
      addTime: new Date().valueOf(),
      beenWatched: false
    };
    if (this.isInList) {
      this.detailService.removeList(id).subscribe(() =>
        this.isInList = false
      );
    } else {
      // 不在list，我們新增
      this.detailService.addtoList(id, sendData).subscribe(() =>
        this.isInList = true);
    }
  }
  handleAdd(type: ListType): void {
    switch (type) {
      case ListType.WATCHLIST:
        this.inWatchlist = !this.inWatchlist;
        this.msgSvc.handleAddAction('待播清單', this.inWatchlist);
        break;
      case ListType.FAVORITE:
        this.inFavorite = !this.inFavorite;
        this.msgSvc.handleAddAction('我的最愛', this.inFavorite);
        break;
    }
  }


  /** 看電影是否已在清單裡 */
  searchInList(id: number): void {
    this.detailService.readListById(id).subscribe(res => {
      // 回空值，代表不在名單
      this.isInList = res ? true : false;
    });
  }

  getMovieGenres(genres: [{ id: number, name: string }]): string[] {
    return genres.map(genre => tify(genre.name));
  }

  imgError(event): void {
    event.target.src = 'assets/not-found.jpeg';
    event.target.style['object-fit'] = 'contain';
    event.target.style['width'] = '100%';
  }
}
