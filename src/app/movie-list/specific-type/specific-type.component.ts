import { IResponse, IGenre } from './../../core/interfaces/movie.interface';
import { MovieRequestService } from './../../core/services/movie-request.service';
import { FormBuilder } from '@angular/forms';
import { filter, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, HostListener, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { API } from 'src/app/core/consts/global-constants.const';
import { LOCALSTORAGE_KEY } from 'src/app/core/consts/routing-path.const';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-specific-type',
  templateUrl: './specific-type.component.html',
  styleUrls: ['./specific-type.component.scss']
})
export class SpecificTypeComponent implements OnInit {
  @ViewChild('specific') specific: ElementRef;
  type: string;
  currentPage = 1;
  validateForm = this.fb.group({
    sort_by: [],
    // 'release_date.gte': [],
    // 'release_date.lte': [],
    rateSlider: [[0, 10]],
    runtimeSlider: [[0, 400]]
  });
  displayList: IMovieInfo[] = [];
  genresList: IGenre[] = [];
  setOfCheckedGenre = new Set();
  /** 是否開放滑動增加 */
  isScrollMore = false;
  /** 滑動頁是否載入完成 */
  loaded = false;
  rateMarks = {
    0: '0',
    5: '5',
    10: '10'
  };
  runtimeMarks = {
    0: '0',
    100: '100',
    200: '200',
    300: '300',
    400: '400'
  };

  sortOpts: { text: string, value: string }[] = [
    { text: '按人氣升序', value: 'popularity.asc' },
    { text: '按人氣降序', value: 'popularity.desc' },
    { text: '按日期升序', value: 'primary_release_date.asc' },
    { text: '按日期降序', value: 'primary_release_date.desc' },
    { text: '按評分降序', value: 'vote_average.asc' },
    { text: '按評分降序', value: 'vote_average.desc' },
  ];
  @HostListener('window:scroll', ['$event'])
  private onScroll($event): void {
    const clientHeight = $event.target.documentElement.clientHeight;
    const scrollTop = $event.target.documentElement.scrollTop;
    const scrollHeight = $event.target.documentElement.scrollHeight;

    if (this.isScrollMore && this.loaded) {
      if (scrollHeight - scrollTop - clientHeight < clientHeight * 0.3) {
        this.loaded = false;
        this.onSubmit(this.currentPage + 1);
      }
    }
  }
  constructor(
    private fb: FormBuilder,
    private mvReqSvc: MovieRequestService,
    private eleRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.genresList = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY.GENRES));
    this.onSubmit(1);
  }



  onSubmit(page: number): void {
    const formValue = this.validateForm.value;
    this.currentPage = page;
    // console.log(typeof formValue['release_date.lte']);
    // console.log(this.validateForm['release_date_str']);
    // const reqBody = Object.keys(formValue).filter(f => !!formValue[f]).reduce((p, c) => ({ ...p, [c]: formValue[c] }), {});
    const reqBody = {};
    reqBody['vote_average.gte'] = formValue.rateSlider[0];
    reqBody['vote_average.lte'] = formValue.rateSlider[1];
    reqBody['with_runtime.gte'] = formValue.runtimeSlider[0];
    reqBody['with_runtime.lte'] = formValue.runtimeSlider[1];
    reqBody['with_genres'] = [...this.setOfCheckedGenre].join(',');
    reqBody['page'] = page;
    if (this.validateForm.get('sort_by').value) { reqBody['sort_by'] = this.validateForm.get('sort_by').value; }
    this.getMovies(page, reqBody);
  }


  // TODO:選項跟日期讀不到
  getMovies(page: number, reqBody: any): void {
    if (page === 1) {
      this.isScrollMore = false;
      this.loaded = false;
      this.mvReqSvc.request(API.GET, API.DISCOVER, reqBody).subscribe((res: IResponse) => {
        this.displayList = res.results;
      });
    } else {
      // 第二頁開始變滾動
      this.isScrollMore = true;
      this.mvReqSvc.request(API.GET, API.DISCOVER, reqBody).subscribe((res: IResponse) => {
        this.displayList = this.displayList.concat(res.results);
        this.loaded = true;
      });
    }

  }

  selectGenre(id: number): void {
    this.setOfCheckedGenre.has(id) ? this.setOfCheckedGenre.delete(id) : this.setOfCheckedGenre.add(id);
  }

  formatter(value: number): string {
    return `value`;
  }

  log(e: any): void {
    console.log(e);
  }
}
