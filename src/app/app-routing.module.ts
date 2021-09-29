
import { ROUTING_PATH } from './core/consts/routing-path.const';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: ROUTING_PATH.WATCHLIST, loadChildren: () => import('./movie-list/watchlist/watchlist.module').then(m => m.WatchlistModule) },
  { path: ROUTING_PATH.HOME, loadChildren: () => import('./movie-list/homepage/homepage.module').then(m => m.HomepageModule) },
  {
    path: ROUTING_PATH.SPECIFIC_TYPE, loadChildren: () =>
      import('./movie-list/specific-type/specific-type.module').then(m => m.SpecificTypeModule)
  },
  { path: '', redirectTo: ROUTING_PATH.HOME, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
