import { ItemsListComponent } from './content/items-list/items-list.component';
import { SharedModule } from './../../shared/shared.module';
import { WatchlistComponent } from './watchlist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistRoutingModule } from './watchlist-routing.module';
import { CommentComponent } from './content/comment/comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EitherWatchComponent } from './content/either-watch/either-watch.component';
import { MovieInfoComponent } from './content/either-watch/movie-info/movie-info.component';
import { FavoriteListComponent } from './content/favorite-list/favorite-list.component';
import { CustomListPageComponent } from './content/custom-list-page/custom-list-page.component';
import { CustomListInfoComponent } from './content/custom-list-page/custom-list-info/custom-list-info.component';

@NgModule({
  declarations: [
    WatchlistComponent,
    CommentComponent,
    EitherWatchComponent,
    MovieInfoComponent,
    FavoriteListComponent,
    CustomListPageComponent,
    CustomListInfoComponent,
    ItemsListComponent
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
