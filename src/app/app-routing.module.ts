import { UserlistGuard } from './core/guard/userlist.guard';

import { ROUTING_PATH } from './core/consts/routing-path.const';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './movie-list/auth/signup/signup.component';
import { LoginComponent } from './movie-list/auth/login/login.component';
import { MovieDetailComponent } from './movie-list/homepage/movie-detail/movie-detail.component';

const routes: Routes = [
  { path: ROUTING_PATH.SIGNUP, component: SignupComponent },
  { path: ROUTING_PATH.LOGIN, component: LoginComponent },
  { path: `${ROUTING_PATH.MOVIE}/:id`, component: MovieDetailComponent },
  {
    path: ROUTING_PATH.WATCHLIST, loadChildren: () => import('./movie-list/watchlist/watchlist.module').then(m => m.WatchlistModule),
    canActivate: [UserlistGuard]
  },
  {
    path: ROUTING_PATH.HOME, loadChildren: () => import('./movie-list/homepage/homepage.module').then(m => m.HomepageModule),
  },
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
