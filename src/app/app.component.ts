import { Component, OnDestroy, HostListener, NgZone } from '@angular/core';
import { AuthService } from './user/_services/authentication.service';
import { MobileService } from './core/_services/mobile.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoaderService } from './core/_components/loader/loader.service';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  isLoggedIn: Observable<boolean>;
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;


  constructor(public authService: AuthService, private fb: FormBuilder, private mobileService: MobileService,
    private router: Router, private loaderService: LoaderService, private ngZone: NgZone) {
    this.isLoggedIn = authService.isLoggedIn();
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.currentTarget.innerWidth > 991) {
      this.mobileService.setMobileView(false);
      return;
    }
    this.mobileService.setMobileView(true);
  }


  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loaderService.showLoader();
    }
    if (event instanceof NavigationEnd) {
      this.loaderService.hideLoader();
    }

    if (event instanceof NavigationCancel) {
      this.loaderService.hideLoader();
    }
    if (event instanceof NavigationError) {
      this.loaderService.hideLoader();
    }
  }

  // Shows and hides the loading spinner during RouterEvent changes
  private _navigationInterceptor(event: RouterEvent): void {

    if (event instanceof NavigationStart) {
      // We wanna run this function outside of Angular's zone to
      // bypass change detection
      this.ngZone.runOutsideAngular(() => {
        // For simplicity we are going to turn opacity on / off
        // you could add/remove a class for more advanced styling
        // and enter/leave animation of the spinner
        this.loaderService.showLoader();
      });
    }
    if (event instanceof NavigationEnd) {
      this._hideSpinner();
    }

    // Set loading state to false in both of the below events to
    // hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this._hideSpinner();
    }
    if (event instanceof NavigationError) {
      this._hideSpinner();
    }
  }

  private _hideSpinner(): void {

    // We wanna run this function outside of Angular's zone to
    // bypass change detection,
    this.ngZone.runOutsideAngular(() => {

      // For simplicity we are going to turn opacity on / off
      // you could add/remove a class for more advanced styling
      // and enter/leave animation of the spinner
      this.loaderService.hideLoader();
    });
  }

  ngOnDestroy() {
  }
}
