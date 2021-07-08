import { NzModalRef } from 'ng-zorro-antd/modal';
import { DetailService } from './../../homepage/shared/detail.service';
import { IWatchedMovie } from './../shared/watchlist';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() movie: IWatchedMovie;
  validateForm: FormGroup = this.fb.group({
    watchedDate: ['', Validators.required],
    comment: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private detailService: DetailService,
    public modalRef: NzModalRef
  ) { }

  ngOnInit(): void {
  }

  /**
   * 更新電影狀態
   * @id
   * @returns
   */
   submitForm() {
    const formControls = this.validateForm.controls;
    for (const i in formControls) {
      if (formControls.hasOwnProperty(i)) {
        formControls[i].markAsDirty;
        formControls[i].updateValueAndValidity;
      }
    }
    if (this.validateForm.invalid) { return; }
    const value = this.validateForm.value;
    this.detailService.patchMovie(this.movie.id, { beenWatched: true, ...value }).subscribe(() =>
        this.modalRef.triggerOk()
    );
  }
}
