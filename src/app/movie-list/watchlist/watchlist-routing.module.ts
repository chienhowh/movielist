import { CustomListInfoComponent } from './content/custom-list-page/custom-list-info/custom-list-info.component';
import { CustomListPageComponent } from './content/custom-list-page/custom-list-page.component';
import { UserlistGuard } from './../../core/guard/userlist.guard';
import { FavoriteListComponent } from './content/favorite-list/favorite-list.component';
import { ItemsListComponent } from './content/items-list/items-list.component';
import { ROUTING_PATH } from './../../core/consts/routing-path.const';
import { EitherWatchComponent } from './content/either-watch/either-watch.component';
import { WatchlistComponent } from './watchlist.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: ROUTING_PATH.CUSTOM_LIST, component: CustomListPageComponent },
  { path: `${ROUTING_PATH.CUSTOM_LIST}/:id`, component: CustomListInfoComponent },
  {
    path: ROUTING_PATH.EITHER_WATCH, component: EitherWatchComponent,
    canActivate: [UserlistGuard]
  },
  {
    path: ROUTING_PATH.FAVORITE_LIST, component: FavoriteListComponent,
    canActivate: [UserlistGuard]
  },
  { path: '', component: WatchlistComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchlistRoutingModule {

}
