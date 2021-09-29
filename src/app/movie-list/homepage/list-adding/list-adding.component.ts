import { NewListService } from './../shared/new-list.service';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { verifyForm } from '../../../core/funcs/verify-form';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-list-adding',
  templateUrl: './list-adding.component.html',
  styleUrls: ['./list-adding.component.scss']
})
export class ListAddingComponent implements OnInit {
  validateForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public modalRef: NzModalRef,
    private newListSvc: NewListService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm(): void {
    this.validateForm = this.fb.group({
      subject: ['', Validators.required],
      desc: [''],
    });
  }


  submitForm(): void {
    if (verifyForm(this.validateForm)) { return; }
    const value = this.validateForm.value;
    value.collections = [];
    this.newListSvc.newList(uuidv4(), value).subscribe(() => this.modalRef.close());
  }


}
