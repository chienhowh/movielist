import { SharedModule } from './../../shared/shared.module';
import { WatchlistComponent } from './watchlist.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WatchlistRoutingModule} from './watchlist-routing.module'




@NgModule({
  declarations: [
    WatchlistComponent
  ],
  imports: [
    CommonModule,
    WatchlistRoutingModule,
    SharedModule
  ]
})
export class WatchlistModule { }
