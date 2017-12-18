import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  redirectUrl: string;

  constructor (
    private router: Router
   ) {}

  /**
   *
   * @returns {Observable<T>}
   */
  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  /**
   *  Login the user then tell all the subscribers about the new status
   */
  login() : void {
    localStorage.setItem('token', 'JWT');
    this.isLoginSubject.next(true);
    if(this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
    } else {
      this.router.navigate(['/']);
    }
  }

  /**
   * Log out the user then tell all the subscribers about the new status
   */
  logout() : void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
    this.router.navigate(['login']);
  }

  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken() : boolean {
    // setTimeout(() => {
    //   this.isLoginSubject.next(true);
    // }, 5000);


    return !!localStorage.getItem('token');
  }
}