import { ListHandleService } from './../../../../core/services/list-handle.service';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { EitherWatch } from 'src/app/core/enums/list-type.enum';
import { NzModalRef } from 'ng-zorro-antd/modal';

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { verifyForm } from '../../../../core/funcs/verify-form';
import { IWatchedMovie } from '../../shared/watchlist';
import { map, take, takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() movie: IMovieInfo;
  /** 評論(new) or 看紀錄(read) */
  @Input() isWatched: EitherWatch;
  EitherWatch = EitherWatch;
  validateForm: FormGroup = this.fb.group({
    watchedDate: [new Date(), Validators.required],
    comment: ['', Validators.required]
  });

  movieFb: IWatchedMovie;
  constructor(
    private fb: FormBuilder,
    private listHandleSvc: ListHandleService,
    public modalRef: NzModalRef,
  ) { }

  ngOnInit(): void {
    console.log('isWatched :: ', this.isWatched);
    this.listHandleSvc.getFromWatchListById(this.movie.id).pipe(
      take(1),
      map(mv => ({ ...mv, watchedDate: mv.watchedDate.seconds * 1000 }))
    ).subscribe(res => {
      if (this.isWatched === EitherWatch.BEENWATCHED) {
        this.validateForm.patchValue(res);
        this.validateForm.disable();
      }
    });
  }

  /**
   * 更新電影狀態
   * @id
   */
  submitForm(): void {
    if (verifyForm(this.validateForm)) { return; }
    const value = this.validateForm.value;
    value.id = this.movie.id;
    value.isWatched = true;
    this.listHandleSvc.addCommentToWatchList(value);
    this.modalRef.close();
  }
}
