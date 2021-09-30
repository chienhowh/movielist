import { map } from 'rxjs/operators';
import { API } from 'src/app/core/consts/global-constants.const';
import { MovieRequestService } from './movie-request.service';
import { Injectable } from '@angular/core';
import { tify } from 'chinese-conv';
import { IGenre } from '../interfaces/movie.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(
    private mvReqSvc: MovieRequestService
  ) { }


  getGenres(): Observable<IGenre[]> {
    return this.mvReqSvc.request(API.GET, API.GENRE_LIST).pipe(
      map(res => res.genres),
      map(g => g.map(r => ({ id: r.id, name: tify(r.name) })))
    );
  }
}
