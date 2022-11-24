import { CustomlistService } from './../../../core/services/customlist.service';
import { ROUTING_PATH } from './../../../core/consts/routing-path.const';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { verifyFormValid } from '../../../core/funcs/verify-form';
@Component({
  selector: 'app-list-adding',
  templateUrl: './list-adding.component.html',
  styleUrls: ['./list-adding.component.scss']
})
export class ListAddingComponent implements OnInit {
  validateForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private nzMsgSvc: NzMessageService,
    private router: Router,
    private customeListSvc:CustomlistService
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
    this.customeListSvc.newCustomList(requestBody).subscribe(() => {
      this.nzMsgSvc.success(`Create "${requestBody.subject}"`);
      this.router.navigate([ROUTING_PATH.HOME]);
    });
  }


}
