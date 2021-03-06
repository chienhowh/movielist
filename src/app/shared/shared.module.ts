import { RateIconComponent } from './rate-icon/rate-icon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { VerticalCardComponent } from './components/vertical-card/vertical-card.component';
@NgModule({
  declarations: [
    RateIconComponent,
    MovieCardComponent,
    VerticalCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RateIconComponent,
    NzTabsModule,
    NzFormModule,
    NzDatePickerModule,
    NzButtonModule,
    NzGridModule,
    NzModalModule,
    NzInputModule,
    NzIconModule,
    NzDropDownModule,
    NzTreeModule,
    NzDrawerModule,
    NzToolTipModule,
    NzMessageModule,
    NzSelectModule,
    NzCollapseModule,
    NzSliderModule,
    NzBackTopModule,
    MovieCardComponent,
    VerticalCardComponent
  ]
})
export class SharedModule { }
