/**
 * Angular Cores
 */
import { NgModule } from '@angular/core';

/**
 * Module Imports
 */
import { AuthService } from './_services/authentication.service';

import '../common/global-import';
@NgModule({
  imports: [
  ],
  providers: [
      AuthService
  ]
})
export class UserModule { }

