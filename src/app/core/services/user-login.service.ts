import { NzMessageService } from 'ng-zorro-antd/message';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { COMMON } from '../consts/global-constants.const';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  constructor(
    private afAuth: AngularFireAuth,
    private nzMsgSvc: NzMessageService
  ) { }


  async login(): Promise<void> {
    // this.authSvc.loginForUser().then(()=>console.log(this.authSvc.user) );
    // this.authSvc.loginWithGoogle();
    const provider = new firebase.default.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    console.log(credential);
    const user = {
      username: credential.user.displayName,
      email: credential.user.email
    };
    sessionStorage.setItem(COMMON.UID, credential.user.uid);
    sessionStorage.setItem(COMMON.USER, JSON.stringify(user));
  }

  logout(): void {
    this.afAuth.signOut().then(() => {
      const user = JSON.parse(sessionStorage.getItem(COMMON.USER)).username;
      sessionStorage.removeItem(COMMON.UID);
      sessionStorage.removeItem(COMMON.USER);
      this.nzMsgSvc.success(`${user} 已登出!`);
    });
  }

  isLogin(): boolean {
    return !!sessionStorage.getItem(COMMON.UID);
  }
}
