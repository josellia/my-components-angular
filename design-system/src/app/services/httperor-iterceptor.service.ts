import { HttpErrorResponse, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class HttperorIterceptorService {

  constructor(private alertSerice: AlertService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    console.log('HTTP request started');
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMessage = this.setError(error);
        this.alertSerice.error(errorMessage);
        return throwError(errorMessage);
      })
    )
  }

  setError(error: HttpErrorResponse):string{
    let errorMessage = 'Unknow';

    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      if(error.status !== 0){
        errorMessage = error.error.errorMessage;
      }
    }
    return errorMessage;
  }
}
