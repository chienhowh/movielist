import { NzModalModule } from 'ng-zorro-antd/modal';
import { SharedModule } from './../../shared/shared.module';
import { WatchlistComponent } from './watchlist.component';
import { NzFormModule } from 'ng-zorro-antd/form';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistRoutingModule } from './watchlist-routing.module';
import { CommentComponent } from './comment/comment.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WatchedMovieComponent } from './watched-movie/watched-movie.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    WatchlistComponent,
    CommentComponent,
    WatchedMovieComponent
  ],
  imports: [
    CommonModule,
    WatchlistRoutingModule,
    SharedModule,
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
