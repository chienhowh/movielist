import { FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LOCALSTORAGE_KEY } from 'src/app/core/consts/routing-path.const';
import { IGenre } from 'src/app/core/interfaces/movie.interface';

@Component({
  selector: 'app-laptop-fileter',
  templateUrl: './laptop-fileter.component.html',
  styleUrls: ['./laptop-fileter.component.scss']
})
export class LaptopFileterComponent implements OnInit {
  @Output() searchMovie = new EventEmitter();
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
    { text: '按評分升序', value: 'vote_average.asc' },
    { text: '按評分降序', value: 'vote_average.desc' },
  ];
  validateForm = this.fb.group({
    sort_by: [],
    rateSlider: [[0, 10]],
    runtimeSlider: [[0, 400]]
  });
  genresList: IGenre[] = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY.GENRES));
  setOfCheckedGenre = new Set();
  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }
  selectGenre(id: number): void {
    this.setOfCheckedGenre.has(id) ? this.setOfCheckedGenre.delete(id) : this.setOfCheckedGenre.add(id);
  }

  onSubmit(): void {
    const formValue = this.validateForm.value;
    const reqBody = {};
    reqBody['vote_average.gte'] = formValue.rateSlider[0];
    reqBody['vote_average.lte'] = formValue.rateSlider[1];
    reqBody['with_runtime.gte'] = formValue.runtimeSlider[0];
    reqBody['with_runtime.lte'] = formValue.runtimeSlider[1];
    reqBody['with_genres'] = [...this.setOfCheckedGenre].join(',');
    if (this.validateForm.get('sort_by').value) { reqBody['sort_by'] = this.validateForm.get('sort_by').value; }
    this.searchMovie.emit(reqBody);
  }
}
