import { Injectable } from '@angular/core';
import { COMMON } from '../consts/global-constants.const';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  constructor(
  ) { }

  isLogin(): boolean {
    return !!sessionStorage.getItem(COMMON.UID);
  }
}
