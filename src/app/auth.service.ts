import { environment } from './../environments/environment';
import { Injectable, NgZone } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
// declare var gapi : any;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private auth: gapi.auth2.GnoogleAuth;
  // user: gapi.auth2.GoogleUser;
  socialUser: SocialUser;
  isLoggedin = false;
  constructor(
    private zone: NgZone,
    private socialAuthService: SocialAuthService
  ) {
    // this.load()
    //   .then(() => this.init())
    //   .then(auth => {
    //     this.auth = auth;
    //   });
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });
  }


  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

  // private load(): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     this.zone.run(() => {
  //       gapi.load('auth2', {
  //         callback: resolve,
  //         onerror: reject,
  //       });
  //     });
  //   });
  // }


  // private init(): Promise<gapi.auth2.GoogleAuth> {
  //   return new Promise((resolve, reject) => {
  //     this.zone.run(() => {
  //       const auth = gapi.auth2.init({
  //         client_id: environment.GAPI_CLIENT_ID,
  //         scope: 'profile email',
  //       });
  //       resolve(auth);
  //     });
  //   });
  // }

  // loginForUser(): Promise<gapi.auth2.GoogleUser> {
  //   return this.zone.run(() => {
  //     return this.auth.signIn()
  //       .then(user => {
  //         this.user = user;
  //         return user;
  //       });
  //   });
  // }

  // loginForCode(): Promise<{ code: string }> {
  //   return this.zone.run(() => {
  //     return this.auth.grantOfflineAccess()
  //       .then(response => {
  //         return response;
  //       });
  //   });
  // }


  // initGoogleOAuth(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     gapi.load('auth2', async () => {
  //       const gAuth = await gapi.auth2.init({
  //         client_id: environment.GAPI_CLIENT_ID,
  //         fetch_basic_profile: true,
  //         scope: 'profile'
  //       });
  //       resolve(gAuth);
  //     }, reject);
  //   });
  // }


}
