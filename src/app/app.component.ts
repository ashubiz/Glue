import { Component, OnDestroy, HostListener } from '@angular/core';
import { AuthService } from './user/_services/authentication.service';
import { MobileService } from './core/_services/mobile.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

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

  constructor(public authService: AuthService, private fb: FormBuilder, private mobileService: MobileService) {
    this.isLoggedIn = authService.isLoggedIn();

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.currentTarget.innerWidth > 991) {
      this.mobileService.setMobileView(false);
      return;
    }
    this.mobileService.setMobileView(true);
  }

  ngOnDestroy() {
  }
}
