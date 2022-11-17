import { ROUTING_PATH } from './../../../core/consts/routing-path.const';
import { Router } from '@angular/router';
import { ListHandleService } from './../../../core/services/list-handle.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { verifyFormValid } from '../../../core/funcs/verify-form';
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
    private listHandleSvc: ListHandleService,
    private nzMsgSvc: NzMessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm(): void {
    this.validateForm = this.fb.group({
      subject: ['', Validators.required],
      desc: ['', Validators.required],
    });
  }


  submitForm(): void {
    if (!verifyFormValid(this.validateForm)) { return; }
    const requestBody = this.validateForm.value;
    this.listHandleSvc.newCustomList(requestBody).then(() => {
      this.nzMsgSvc.success(`Create "${requestBody.subject}"`);
      this.router.navigate([ROUTING_PATH.HOME]);
    });
  }


}
