import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
declare var $: any;
@Injectable()
export class MobileService {
  mobileSubject = new BehaviorSubject<boolean>(this.isMobile());
  constructor () {
  }
  /**
   * @returns {Observable<T>}
   */
  isMobileView() : Observable<boolean> {
    return this.mobileSubject.asObservable();
  }

  /**
   * @returns {boolean}
   */
  private isMobile() : boolean {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
  }

  setMobileView(value: boolean) {
    if(this.mobileSubject.getValue() != value) {
        this.mobileSubject.next(value);
    }
  }
}