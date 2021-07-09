import { BrowserModule } from '@angular/platform-browser';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { WatchlistComponent } from './watchlist.component';
import { NzFormModule } from 'ng-zorro-antd/form';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistRoutingModule } from './watchlist-routing.module';
import { CommentComponent } from './comment/comment.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    WatchlistComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    WatchlistRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NzTabsModule,
    NzFormModule,
    NzDatePickerModule,
    NzModalModule,
    NzButtonModule
  ]
})
export class WatchlistModule { }
