import { NzMessageService } from 'ng-zorro-antd/message';
import { UserLoginService } from './../services/user-login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserlistGuard implements CanActivate {
  constructor(
    private loginService: UserLoginService,
    private nzMsgSvc: NzMessageService
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('work!!!');
    if (this.loginService.isLogin()) {
      return true;
    } else {
      this.nzMsgSvc.error('請先登入!');
      return false;
    }
  }

}
