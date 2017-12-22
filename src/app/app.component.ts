import { Component, OnDestroy, HostListener } from '@angular/core';
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
   private router: Router, private loaderService: LoaderService) {
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

  ngOnDestroy() {
  }
}
