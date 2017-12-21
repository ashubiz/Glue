import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { catchError, finalize, map} from 'rxjs/operators';
export class HttpService implements HttpInterceptor {
  requestCalls: number;
  constructor() {
    this.requestCalls = 0;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.showLoader();
    return next.handle(request).pipe(map(event => {
      console.log('2');
      return event;
      
    }),
    catchError(error => {
      return Observable.throw(error)
    }),
    finalize(() => {
      console.log('1');
    })

  )
    
    // .do((event: HttpEvent<any>) => {
    //   this.hideLoader();  
    //   console.log('1');
    //   if (event instanceof HttpResponse) {
    //     // do stuff with response if you want
    //   }
    // }, (err: any) => {
    //   console.log('2');
    //     this.hideLoader();
    //   if (err instanceof HttpErrorResponse) {
    //     if (err.status === 401) {
    //       // redirect to the login route
    //       // or show a modal
    //     }
    //   }
    // });
  }
    private showLoader(): void {
        // this.loaderService.show();
        console.log('show loader');
    }

    private hideLoader(): void {
        // this.loaderService.hide();
        // console.log('hide loader');
    }
}