import { MovieRequestService } from './movie-request.service';
import { Injectable } from '@angular/core';
import { API, COMMON, FIRE_STORE_COLLECTIONS } from '../consts/global-constants.const';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {

  constructor(
    private movieRequestSvc: MovieRequestService
  ) { }

  addToFBMovie(params: any, id: number) {
    return this.movieRequestSvc.fsPost(FIRE_STORE_COLLECTIONS.MOVIES, params, id.toString());
  }

  getFBMovieDetailById(id: number) {
    return this.movieRequestSvc.fsGetByID(FIRE_STORE_COLLECTIONS.MOVIES, id.toString());
  }

  getFBMoviesDetail() {
    return this.movieRequestSvc.fsGet(FIRE_STORE_COLLECTIONS.MOVIES);
  }
}
