import { API } from 'src/app/core/consts/global-constants.const';

import { AuthService } from './auth.service';
import { DEVICE } from './core/consts/device.const';
import { SharedService } from './shared/shared.service';
import { Component, OnInit } from '@angular/core';

import { IDropDown } from './core/interfaces/utilities';
import { ROUTING_PATH } from './core/consts/routing-path.const';
import { EitherWatch } from './core/enums/list-type.enum';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  get ROUTING_PATH(): typeof ROUTING_PATH {
    return ROUTING_PATH;
  }
  title = 'movielist';
  // movieDropList: IDropDown[] = [
  //   { name: '熱門', type: 'aaa' },
  //   { name: '上映中', type: 'bbb' },
  //   { name: '即將上映', type: '' },
  //   { name: '評分最高', type: '' },
  // ];
  collectionDropList: IDropDown[] = [
    { name: '待播清單', endpoint: API.WATCHLIST, type: EitherWatch.NOTWATCHED },
    { name: '已經觀看', endpoint: API.WATCHLIST, type: EitherWatch.BEENWATCHED },
  ];

  drawerVisible = false;
  constructor(
    private sharedService: SharedService,
    private authSvc: AuthService,

  ) {


  }

  ngOnInit(): void {
    this.initUserDevice(document.documentElement.offsetWidth);
  }


  login(): void {
    // this.authSvc.loginForUser().then(()=>console.log(this.authSvc.user) );
    this.authSvc.loginWithGoogle();

  }

  initUserDevice(size: number): void {
    if (size >= 768) {
      this.sharedService.UserDeviceSubject = DEVICE.PAD;
      // 手機版
    } else if (size > 0 && size < 768) {
      this.sharedService.UserDeviceSubject = DEVICE.MOBILE;
    }
  }
}

