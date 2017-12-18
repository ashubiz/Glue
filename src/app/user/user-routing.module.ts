import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: SigninComponent }
    ])
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
