import { NzMessageService } from 'ng-zorro-antd/message';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { COMMON, FIRE_BASE_AUTH_METHOD } from 'src/app/core/consts/global-constants.const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private nzMsgSvc: NzMessageService
  ) { }

  firebaseAuthService(sendData: any, method: string) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${method}?key=AIzaSyDfXBFy3P1IPBncApDTKUBLHk6B9tiQwVQ`
    return this.http.post(url, sendData, { headers: { 'Content-Type': 'application/json', } }).pipe(catchError(this.handleError));
  }


  handleError(errorResponse: HttpErrorResponse): Observable<never> {
    const message = errorResponse.error.error.message;
    throw (message);
  }
  signup(sendData: any) {
    const requestBody = { ...sendData, returnSecureToken: true };
    return this.firebaseAuthService(requestBody, FIRE_BASE_AUTH_METHOD.SIGNUP);
  }

  login(sendData: any): Observable<User> {
    const requestBody = { ...sendData, returnSecureToken: true };
    return this.firebaseAuthService(requestBody, FIRE_BASE_AUTH_METHOD.SIGNIN) as Observable<User>;
  }

  logout(): void {
    sessionStorage.removeItem(COMMON.UID);
    sessionStorage.removeItem(COMMON.USER);
    this.nzMsgSvc.success(`已登出!`);
  }


  isLogin(): boolean {
    return !!sessionStorage.getItem(COMMON.UID);
  }
}


export interface User {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  /** uid */
  localId: string;
  registered: boolean;
}
