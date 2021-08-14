import { environment } from './../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { API, API_POSTER } from '../../movie-list/consts/global-constants.const';
import { catchError, filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieRequestService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   *
   * @param querys 搜索條件
   */
  request(method: string, url: string, sendData?: any): Observable<any> {
    const params = { ...sendData, language: 'zh-TW' };
    if (method === API.POST) {
      return;
    }
    return this.http.get(environment.DEFAULT_IP + url + API.KEY, { params }).pipe(catchError(this.handleError));
  }
  /**
   * call database
   * @param querys 搜索條件
   */
  dbRequest(method: string, url: string, sendData?: any): Observable<any> {
    const headers = this.getHTTPHeaders();
    const params = { ...sendData };

    const sendUrl = environment.DB_IP + url;
    switch (method) {
      case API.GET:
        return this.http.get(sendUrl, { params, headers }).pipe(catchError(this.handleError));
      case API.POST:
        return this.http.post(sendUrl, params, { headers }).pipe(catchError(this.handleError));
      case API.PATCH:
        return this.http.patch(sendUrl, params, { headers }).pipe(catchError(this.handleError));
      case API.DELETE:
        return this.http.delete(sendUrl, { params, headers }).pipe(catchError(this.handleError));
    }
  }

  /** 拿海報 */
  requestPoster(posterPath: string, width = '200'): Observable<any> {
    return this.http.get(`${API_POSTER.GET_POSTER}/w${width}/${posterPath}`);
  }

  // 為了debug用
  handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  /**
   * call firebase
   */
  fbRequest(method: string, url: string, sendData?: any): Observable<any> {
    const headers = this.getHTTPHeaders();
    const params = { ...sendData };

    const sendUrl = environment.FB_IP + url + '.json';
    switch (method) {
      case API.GET:
        return this.http.get(sendUrl, { params, headers }).pipe(catchError(this.handleError));
      case API.POST:
        return this.http.post(sendUrl, params, { headers }).pipe(catchError(this.handleError));
      case API.PUT:
        return this.http.put(sendUrl, params, { headers }).pipe(catchError(this.handleError));
      case API.PATCH:
        return this.http.patch(sendUrl, params, { headers }).pipe(catchError(this.handleError));
      case API.DELETE:
        return this.http.delete(sendUrl, { params, headers }).pipe(catchError(this.handleError));
    }
  }


  private getHTTPHeaders(): HttpHeaders {
    const result = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });
    return result;
  }
}


