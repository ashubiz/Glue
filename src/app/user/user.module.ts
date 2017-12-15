/**
 * Angular Cores
 */
import { NgModule } from '@angular/core';
/**
 * Module Imports
 */
import { UserRoutingModule } from './user-routing.module';
/**
 * Import Component
 */
import { SigninComponent } from './signin/signin.component';

/**
 * Import Services
 */
import { AuthService } from './_services/authentication.service';
import { AuthGuard } from './_guards/authentication.guard';
@NgModule({
    declarations: [
        SigninComponent
    ],
  imports: [
      UserRoutingModule
  ],
  providers: [
      AuthService,
      AuthGuard
  ]
})
export class UserModule { }

