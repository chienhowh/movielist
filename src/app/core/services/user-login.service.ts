import { NzMessageService } from 'ng-zorro-antd/message';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { COMMON } from '../consts/global-constants.const';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  constructor(
    private afAuth: AngularFireAuth,
    private nzMsgSvc: NzMessageService
  ) { }

  isLogin(): boolean {
    console.log('from userlogin');

    return !!sessionStorage.getItem(COMMON.UID);
  }
}
