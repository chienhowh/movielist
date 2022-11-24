import { CustomlistService } from './core/services/customlist.service';
import { NavigationStart, Router } from '@angular/router';
import { API, COMMON } from 'src/app/core/consts/global-constants.const';

import { DEVICE } from './core/consts/device.const';
import { SharedService } from './shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { ROUTING_PATH } from './core/consts/routing-path.const';
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
  ROUTING_PATH = ROUTING_PATH;
  API = API;

  title = 'movielist';
  userInfo: User;
  userDropdown = [
    { subject: 'Customlists', routerLink: ROUTING_PATH.CUSTOM_LIST },
    { subject: 'Watchlist', routerLink: ROUTING_PATH.WATCH },
    { subject: 'Favorite', routerLink: ROUTING_PATH.FAVORITE },
  ];

  items: Observable<any[]>;
  customDropList: ICustomList[] = [];
  DEVICE = DEVICE;
  drawerVisible = false;
  constructor(
    public sharedService: SharedService,
    public authSvc: AuthService,
    private customListSvc: CustomlistService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.initUserDevice(document.documentElement.offsetWidth);
    this.router.events.subscribe(res => {
      if (res instanceof NavigationStart && res.url === '/home') {
        this.userInfo = JSON.parse(sessionStorage.getItem(COMMON.USER));
        if (this.userInfo) {
          this.getCustomList();
        }
      }
    });
  }



  logout(): void {
    this.authSvc.logout();
    this.router.navigate(['home']);
  }

  getCustomList(): void {
    this.customListSvc.getCustomlist().pipe(take(1)).subscribe((res) => this.customDropList = res);
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

