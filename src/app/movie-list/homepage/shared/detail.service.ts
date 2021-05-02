import { Observable } from 'rxjs';
import { MovieRequestService } from './../../../core/services/movie-request.service';
import { Injectable } from '@angular/core';
import { API } from '../../consts/global-constants.const';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(
    private requestService: MovieRequestService
  ) { }

  getMovieDetail(id: number): Observable<any> {
    return this.requestService.request(API.GET, `${API.GET_BY_ID}/${id}`);
  }
}
