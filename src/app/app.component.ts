import { Component } from '@angular/core';
import { AuthService } from './user/_services/authentication.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoggedIn : Observable<boolean>;
  constructor( public authService : AuthService ) {
    this.isLoggedIn = authService.isLoggedIn();
  }
}
