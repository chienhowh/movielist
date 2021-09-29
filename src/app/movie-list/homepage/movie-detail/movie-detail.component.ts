import { ListAddingComponent } from './../list-adding/list-adding.component';
import { Router, ActivatedRoute } from '@angular/router';

import { ROUTING_PATH } from '../../core/consts/routing-path.const';
import { Observable } from 'rxjs';
import { ListType } from './../../../core/enums/list-type.enum';
import { MessageService } from './../../../core/services/message.service';
import { DetailService } from './../shared/detail.service';
import { API_POSTER } from '../../core/consts/global-constants.const';
import { IMovieInfo } from './../../../core/interfaces/movie.interface';
import { Component, Input, OnInit } from '@angular/core';
import { tify } from 'chinese-conv';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() info;
  /* 取得資料是否完全，不完全則callAgain true */
  @Input() callAgain: boolean;
  get ROUTING_PATH(): typeof ROUTING_PATH {
    return ROUTING_PATH;
  }
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


  selectedValue = '';
  constructor(
    private detailService: DetailService,
    public modalRef: NzModalRef,
    private msgSvc: MessageService,
    private nzModal: NzModalService
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

  handleAdd(type: ListType): void {
    const sendData = {
      title: this.displayList.title,
      addTime: new Date().valueOf(),
      beenWatched: false
    };
    switch (type) {
      case ListType.WATCHLIST:
        if (this.inWatchlist) {
          this.detailService.removeList(this.movieId, type).subscribe(res => {
            this.inWatchlist = false;
            this.msgSvc.handleAddAction('待播清單', this.inWatchlist);
          });
        } else {
          this.detailService.addtoList(this.movieId, type, sendData).subscribe(res => {
            this.inWatchlist = true;
            this.msgSvc.handleAddAction('待播清單', this.inWatchlist);
          });
        }
        break;
      case ListType.FAVORITE:
        if (this.inFavorite) {
          this.detailService.removeList(this.movieId, type).subscribe(res => {
            this.inFavorite = false;
            this.msgSvc.handleAddAction('我的最愛', this.inFavorite);
          });
        } else {
          this.detailService.addtoList(this.movieId, type, sendData).subscribe(res => {
            this.inFavorite = true;
            this.msgSvc.handleAddAction('我的最愛', this.inFavorite);
          });
        }

    }
  }


  /** 看電影是否有在清單 */
  searchInList(id: number): void {
    this.searchWatchlist(id).subscribe(res => this.inWatchlist = !!res);
    this.searchFavorite(id).subscribe(res => this.inFavorite = !!res);
  }


  searchWatchlist(id: number): Observable<any> {
    return this.detailService.readListById(id, ListType.WATCHLIST);
  }

  searchFavorite(id: number): Observable<any> {
    return this.detailService.readListById(id, ListType.FAVORITE);
  }

  getMovieGenres(genres: [{ id: number, name: string }]): string[] {
    return genres.map(genre => tify(genre.name));
  }

  imgError(event): void {
    event.target.src = 'assets/not-found.jpeg';
    event.target.style['object-fit'] = 'contain';
    event.target.style['width'] = '100%';
  }


  openNewList(): void {
    this.nzModal.create({
      nzTitle: '建立新清單',
      nzContent: ListAddingComponent,
      nzFooter: null,
      nzBodyStyle: { padding: '24px' },
    });
  }
}
