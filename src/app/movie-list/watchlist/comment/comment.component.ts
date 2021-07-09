import { NzModalRef } from 'ng-zorro-antd/modal';
import { DetailService } from './../../homepage/shared/detail.service';
import { IWatchedMovie } from './../shared/watchlist';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() movie: IWatchedMovie;
  /** 評論(new) or 看紀錄(read) */
  @Input() type:string;
  validateForm: FormGroup = this.fb.group({
    watchedDate: [new Date(), Validators.required],
    comment: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private detailService: DetailService,
    public modalRef: NzModalRef,
  ) { }

  ngOnInit(): void {
    if(this.type==='read'){
    console.log(this.movie);
    this.validateForm.patchValue({...this.movie});
    this.validateForm.disable();
    }
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
