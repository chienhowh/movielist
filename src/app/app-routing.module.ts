import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'watchlist',loadChildren:()=>import('./movie-list/watchlist/watchlist.module').then(m=>m.WatchlistModule)},
  {path:'home',loadChildren:()=>import('./movie-list/homepage/homepage.module').then(m=>m.HomepageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
