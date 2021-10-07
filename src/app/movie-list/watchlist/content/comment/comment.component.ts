import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { EitherWatch, ListType } from 'src/app/core/enums/list-type.enum';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzModalRef } from 'ng-zorro-antd/modal';

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { verifyForm } from '../../../../core/funcs/verify-form';
import { DetailService } from 'src/app/movie-list/homepage/shared/detail.service';
import { IWatchedMovie, WATCHLIST_TYPE } from '../../shared/watchlist';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() movie: IMovieInfo;
  /** 評論(new) or 看紀錄(read) */
  @Input() type: EitherWatch;
  EitherWatch = EitherWatch;
  validateForm: FormGroup = this.fb.group({
    watchedDate: [new Date(), Validators.required],
    comment: ['', Validators.required]
  });

  movieFb: IWatchedMovie;
  constructor(
    private fb: FormBuilder,
    private detailService: DetailService,
    public modalRef: NzModalRef,
  ) { }

  ngOnInit(): void {
    this.detailService.readListById(this.movie.id, ListType.WATCHLIST).subscribe(res => {
      this.movieFb = res;
      if (this.type === EitherWatch.BEENWATCHED) {
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
    this.detailService.patchMovie(this.movie.id, { beenWatched: true, ...value }).subscribe(() =>
      this.modalRef.triggerOk()
    );
  }
}
