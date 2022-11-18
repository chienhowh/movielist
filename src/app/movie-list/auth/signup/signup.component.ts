import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { AuthService } from '../auth.service';
import { getFormErrorStr } from '../../../core/validators/errorMsg';
import { ROUTING_PATH } from 'src/app/core/consts/routing-path.const';
import { verifyFormValid } from '../../../core/funcs/verify-form';


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
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, this.passwordConfirmValidators('password')]]
    });
  }

  submitForm(): void {
    if (!verifyFormValid(this.validateForm)) { return; }
    this.authSvc.signup(this.validateForm.value).subscribe(
      res => {
        this.nzMessageSvc.success(`Successfully sign up, let's get started!`);
        this.router.navigate([ROUTING_PATH.LOGIN]
        );
      }
      ,
      err => this.nzMessageSvc.error('invalid password'));
  }

  passwordConfirmValidators(matchTo: string): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      if (!c.parent) { return null }
      return c.value == 0 || c.parent.controls[matchTo].value === c.value ?
        null : { notmatch: true }
    }
  }
}
