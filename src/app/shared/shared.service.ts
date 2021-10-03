import { DEVICE } from './../core/consts/device.const';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private device: DEVICE;
  constructor() { }

  /** PAD || MOBILE */
  set UserDeviceSubject(value) {
    this.device = value;
  }

  get UserDeviceSubject(): DEVICE {
    return this.device;
  }
}
