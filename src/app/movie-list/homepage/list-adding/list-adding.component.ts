import { ListHandleService } from './../../../core/services/list-handle.service';
import { NzMessageService } from 'ng-zorro-antd/message';
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
    private listHandleSvc: ListHandleService,
    private nzMsgSvc: NzMessageService,
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
    const requestBody = this.validateForm.value;
    this.listHandleSvc.newCustomList(requestBody).then(() => {
      this.nzMsgSvc.success(`新增"${requestBody.subject}"清單`);
      this.modalRef.triggerOk();
    });

  }


}
