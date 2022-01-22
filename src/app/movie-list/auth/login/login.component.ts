import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../auth.service';
import { COMMON } from 'src/app/core/consts/global-constants.const';
import { ROUTING_PATH } from 'src/app/core/consts/routing-path.const';
import { getFormErrorStr } from 'src/app/core/validators/errorMsg';
;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  get ROUTING_PATH(): typeof ROUTING_PATH {
    return ROUTING_PATH;
  }
  validateForm!: FormGroup;
  errorMsg = getFormErrorStr;
  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private nzMsgSvc: NzMessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.authSvc.login(this.validateForm.value).subscribe(
        (user: User) => {
          console.log(user);
          sessionStorage.setItem(COMMON.UID, user.localId);
          sessionStorage.setItem(COMMON.USER, JSON.stringify(user));
          this.router.navigate([ROUTING_PATH.HOME]);
        },
        err => this.nzMsgSvc.error(err));
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }


  }
}
