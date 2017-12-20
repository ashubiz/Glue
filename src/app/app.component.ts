import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './user/_services/authentication.service';
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

  myDate: FormControl;

  constructor(public authService: AuthService, private fb: FormBuilder) {
    this.isLoggedIn = authService.isLoggedIn();
    this.myDate = this.fb.control({
      date: ''
    });

    this.myDate.valueChanges.subscribe((element) => {
      console.log(element);
    });

  }

  ngOnDestroy() {
  }
}
