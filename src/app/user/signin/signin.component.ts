import { Component } from '@angular/core';
import { AuthService } from '../_services/authentication.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent {
 
  constructor( public authService : AuthService ) {
    
  }

  login() {
    this.authService.login();
  }
}
