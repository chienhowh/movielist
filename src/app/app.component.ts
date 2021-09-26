import { AuthService } from './auth.service';
import { DEVICE } from './movie-list/consts/device.const';
import { SharedService } from './shared/shared.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movielist';
  drawerVisible = false;
  constructor(
    private sharedService: SharedService,
    private authSvc: AuthService
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
    if (size >= 1024) {
      this.sharedService.setUserDeviceSubject = DEVICE.PAD;
      // 手機版
    } else if (size > 0 && size < 1024) {
      this.sharedService.setUserDeviceSubject = DEVICE.MOBILE;
    }
  }
}
