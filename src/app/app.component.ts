import { NavigationStart, Router } from '@angular/router';
import { ListHandleService } from './core/services/list-handle.service';
import { API, COMMON } from 'src/app/core/consts/global-constants.const';

import { DEVICE } from './core/consts/device.const';
import { SharedService } from './shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { IDropDown } from './core/interfaces/utilities';
import { ROUTING_PATH } from './core/consts/routing-path.const';
import { EitherWatch } from './core/enums/list-type.enum';
import { Observable } from 'rxjs';
import { ICustomList } from './core/interfaces/movie.interface';
import { take } from 'rxjs/operators';
import { User, AuthService } from './movie-list/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ROUTING_PATH = ROUTING_PATH
  API = API;

  title = 'movielist';
  userInfo: User;

  collectionDropList: IDropDown[] = [
    { name: '待播清單', type: EitherWatch.NOTWATCHED },
    { name: '已經觀看', type: EitherWatch.BEENWATCHED },
  ];
  items: Observable<any[]>;
  customDropList: ICustomList[] = [];
  DEVICE = DEVICE;
  drawerVisible = false;
  constructor(
    public sharedService: SharedService,
    public authSvc: AuthService,
    private listHandleSvc: ListHandleService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.initUserDevice(document.documentElement.offsetWidth);
    this.router.events.subscribe(res => {
      if (res instanceof NavigationStart && res.url === '/home') {
        this.userInfo = JSON.parse(sessionStorage.getItem(COMMON.USER));
        console.log(this.userInfo);
        if (this.userInfo) {
          this.getCustomList();
        }
      }
    });
  }



  logout(): void {
    this.authSvc.logout();
    this.customDropList = [];
    this.router.navigate(['home']);
  }

  getCustomList(): void {
    this.listHandleSvc.getCustomlist().pipe(take(1)).subscribe((res) => this.customDropList = res);
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

