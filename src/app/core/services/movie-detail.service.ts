import { MovieRequestService } from './movie-request.service';
import { Injectable } from '@angular/core';
import { API, COMMON, FIRE_STORE_COLLECTIONS } from '../consts/global-constants.const';
import { Params } from '@angular/router';
import { IMovieInfo } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {

  constructor(
    private movieRequestSvc: MovieRequestService
  ) { }

  // from tmdb

  /**
   * 取得電影明細
   */
  getMovieDetail(id: number, params?: Params) {
    return this.movieRequestSvc.get<IMovieInfo>(`${API.MOVIE}/${id}`, params);
  }


  // from firebase
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
