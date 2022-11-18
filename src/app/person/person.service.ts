import { IPerson } from './../core/interfaces/movie.interface';
import { MovieRequestService } from './../core/services/movie-request.service';
import { Injectable } from '@angular/core';
import { API } from '../core/consts/global-constants.const';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private requestSvc: MovieRequestService
  ) { }

  getPersonByID(peopleID: string, params?: Params) {
    return this.requestSvc.get<IPerson>(`${API.PERSON}/${peopleID}`, params);
  }
}
