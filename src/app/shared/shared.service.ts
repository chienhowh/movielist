import { DEVICE } from '../core/consts/device.const';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  device = '';
  constructor() { }

  set setUserDeviceSubject(value: string) {
    this.device = value;
  }
}
