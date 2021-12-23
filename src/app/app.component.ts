import { ListHandleService } from './core/services/list-handle.service';
import { UserLoginService } from './core/services/user-login.service';
import { NewListService } from './movie-list/homepage/shared/new-list.service';
import { API, COMMON } from 'src/app/core/consts/global-constants.const';

import { DEVICE } from './core/consts/device.const';
import { SharedService } from './shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { IDropDown } from './core/interfaces/utilities';
import { ROUTING_PATH } from './core/consts/routing-path.const';
import { EitherWatch } from './core/enums/list-type.enum';
import { Observable } from 'rxjs';
import { ICustomList } from './core/interfaces/movie.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  get ROUTING_PATH(): typeof ROUTING_PATH {
    return ROUTING_PATH;
  }

  get API(): typeof API {
    return API;
  }
  title = 'movielist';
  userInfo: { username: string, email: string };
  // movieDropList: IDropDown[] = [
  //   { name: '熱門', type: 'aaa' },
  //   { name: '上映中', type: 'bbb' },
  //   { name: '即將上映', type: '' },
  //   { name: '評分最高', type: '' },
  // ];
  collectionDropList: IDropDown[] = [
    { name: '待播清單', type: EitherWatch.NOTWATCHED },
    { name: '已經觀看', type: EitherWatch.BEENWATCHED },
  ];
  items: Observable<any[]>;
  customDropList: ICustomList[] = [];

  drawerVisible = false;
  constructor(
    private sharedService: SharedService,
    private newListSvc: NewListService,
    public userLoginSvc: UserLoginService,
    private listHandleSvc: ListHandleService
  ) {
  }

  ngOnInit(): void {
    this.initUserDevice(document.documentElement.offsetWidth);
    this.userInfo = JSON.parse(sessionStorage.getItem(COMMON.USER));
    console.log(this.userInfo);
    this.listHandleSvc.getCustomlist().subscribe((res) => this.customDropList = res);
  }

  login(): void {
    this.userLoginSvc.login().then(() => this.userInfo = JSON.parse(sessionStorage.getItem(COMMON.USER)));
  }

  logout(): void {
    this.userLoginSvc.logout();
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

