import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Cows } from '../models/cows';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class RestApiCownsService {
  apiURL = ' http://localhost:3000';

  constructor(private http: HttpClient, private alertService: AlertService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  getCows(): Observable<Cows[]> {
    return this.http.get<Cows[]>(this.apiURL + '/cows')
    .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any){
    let errorMessage = '';

    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    //this.alertService.error(errorMessage);
    return throwError(error);

    // return throwError(() => {
    //   return errorMessage;
    // });
  }
}
