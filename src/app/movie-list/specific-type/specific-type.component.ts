import { IResponse, IGenre } from './../../core/interfaces/movie.interface';
import { MovieRequestService } from './../../core/services/movie-request.service';
import { FormBuilder } from '@angular/forms';
import { filter, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { API } from 'src/app/core/consts/global-constants.const';
import { LOCALSTORAGE_KEY } from 'src/app/core/consts/routing-path.const';

@Component({
  selector: 'app-specific-type',
  templateUrl: './specific-type.component.html',
  styleUrls: ['./specific-type.component.scss']
})
export class SpecificTypeComponent implements OnInit {
  type: string;
  currentPage = 1;
  validateForm = this.fb.group({
    sort_by: [],
    'release_date.gte': [],
    'release_date.lte': [],
  });
  displayList: IMovieInfo[] = [];
  genresList: IGenre[] = [];
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private mvReqSvc: MovieRequestService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(map(params => params.type)).subscribe(t => this.type = t);
    this.getMovies();
    this.genresList = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY.GENRES));
  }

  onSubmit(): void {
    this.getMovies();
  }

  getMovies(): void {
    const formValue = this.validateForm.value;
    const reqBody = Object.keys(formValue).filter(f => !!formValue[f]).reduce((p, c) => ({ ...p, [c]: formValue[c] }), {});

    this.mvReqSvc.request(API.GET, API.DISCOVER, reqBody).subscribe((res: IResponse) => {
      this.displayList = res.results;
    });
  }
}
