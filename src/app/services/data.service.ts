import { environment } from './../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient: HttpClient) { }

  public getAllData() {
    return this._httpClient
      .get<[]>(environment.API, { params: new HttpParams({}), observe: 'response' })
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap((res) => { })
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknow error!;';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error :${error.error.message}`;
    } else {
      errorMessage = `Error : ${error.status} \nMessage :${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
