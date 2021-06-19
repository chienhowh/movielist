import { DetailService } from './../shared/detail.service';
import { API_POSTER } from './../../consts/global-constants.const';
import { IMovieInfo } from './../../../core/interfaces/movie.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  API_POSTER = API_POSTER;
  movieId: number = this.data.info.id;
  displayList: IMovieInfo;
  // 取得資料是否完全，不完全則callAgain true
  callAgain: boolean;
  isInList = false;

  listMap = [
    { header: '類型', key: 'genres' },
    { header: '上映日期', key: 'release_date' },
    { header: '評分', key: 'vote_average' },
    { header: '片長', key: 'runtime' },
  ];

  constructor(
    public dialogRef: MatDialogRef<MovieDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { info: IMovieInfo, callAgain: boolean },
    private detailService: DetailService,
    private library: FaIconLibrary,
  ) { }

  ngOnInit(): void {
    this.library.addIcons(farHeart, fasHeart);
    this.callAgain = this.data.callAgain;
    if (this.callAgain) {
      this.getDetailById(this.movieId);
    } else {
      this.displayList = this.data.info;
      this.searchInList(this.movieId);
    }
  }

  getDetailById(id: number) {
    this.detailService.getMovieDetail(id).subscribe(res => {
      this.displayList = res;
    });
    this.searchInList(id);
  }



  /** click icon to addlist */
  addList(detail: IMovieInfo) {
    const { title, id } = detail;
    const sendData = { id, title };
    if (this.isInList) {
      this.detailService.removeList(id).subscribe((res) => {
        console.log(res);

        if (res.errors) { console.log('error'); return; }
        this.isInList = false;
      });
    } else {
      // 不在list，我們新增
      this.detailService.addtoList(sendData).subscribe((res) => {
        if (res.errors) { console.log('error'); return; }
        this.isInList = true;
      });
    }
  }



  /** 看電影是否已在清單裡 */
  searchInList(id: number) {
    this.detailService.readList(id).subscribe(res => {
      // 回空值，代表不在名單
      this.isInList = res ? true : false;
    });
  }

  getMovieGenres(genres: [{ id: number, name: string }]) {
    return genres.map(genre => genre.name);
  }

  closeDialog() {
    this.dialogRef.close('sushi');
  }
}
