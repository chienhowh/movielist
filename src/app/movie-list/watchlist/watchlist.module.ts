import { SharedModule } from './../../shared/shared.module';
import { WatchlistComponent } from './watchlist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistRoutingModule } from './watchlist-routing.module';
import { CommentComponent } from './content/comment/comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EitherWatchComponent } from './content/either-watch/either-watch.component';

@NgModule({
  declarations: [
    WatchlistComponent,
    CommentComponent,
    EitherWatchComponent
  ],
  imports: [
    CommonModule,
    WatchlistRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class WatchlistModule { }
