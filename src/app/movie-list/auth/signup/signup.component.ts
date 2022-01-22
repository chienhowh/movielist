import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { getFormErrorStr } from '../../../core/validators/errorMsg';
import { ROUTING_PATH } from 'src/app/core/consts/routing-path.const';
;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  validateForm!: FormGroup;
  errorMsg = getFormErrorStr;
  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private nzMessageSvc: NzMessageService,
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
      this.authSvc.signup(this.validateForm.value).subscribe(
        res => {
          this.nzMessageSvc.success('註冊成功，立即開始吧!');
          this.router.navigate([ROUTING_PATH.LOGIN]
          );
        }
        ,
        err => this.nzMessageSvc.error('invalid password'));
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
