import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BusinessProfileComponent } from './business-profile.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BusinessProfileComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class BusinessProfileRoutingModule { }
