import { ROUTING_PATH } from './../../core/consts/routing-path.const';
import { EitherWatchComponent } from './content/either-watch/either-watch.component';
import { WatchlistComponent } from './watchlist.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: ROUTING_PATH.EITHER_WATCH, component: EitherWatchComponent },
  { path: '', component: WatchlistComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchlistRoutingModule {

}
