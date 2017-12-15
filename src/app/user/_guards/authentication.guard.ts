
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(): Observable<any> | Promise<any> | boolean {
        return true;
    }
}