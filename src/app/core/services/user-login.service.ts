import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { COMMON } from '../consts/global-constants.const';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  /** 身分 */
  user: User;
  isLogin = false;
  constructor(
    private afAuth: AngularFireAuth

  ) { }


  async login(): Promise<void> {
    // this.authSvc.loginForUser().then(()=>console.log(this.authSvc.user) );
    // this.authSvc.loginWithGoogle();
    const provider = new firebase.default.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    console.log(credential);
    this.user = new User(credential.user);
    this.isLogin = true;
    sessionStorage.setItem(COMMON.UID, credential.user.uid);
  }

  logout(): void {
    this.afAuth.signOut().then(() => {
      sessionStorage.removeItem(COMMON.UID);
      this.isLogin = false;
    });
  }
}
