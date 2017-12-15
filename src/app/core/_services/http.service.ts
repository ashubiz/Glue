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
export class HttpService implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.showLoader();
    return next.handle(request).do((event: HttpEvent<any>) => {
      this.hideLoader();  
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
        this.hideLoader();
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // redirect to the login route
          // or show a modal
        }
      }
    });
  }
    private showLoader(): void {
        // this.loaderService.show();
    }

    private hideLoader(): void {
        // this.loaderService.hide();
    }
}