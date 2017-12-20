import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BusinessProfileComponent } from './business-profile.component';
import { EditBusinessProfileComponent } from './edit-business-profile/edit-business-profile.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BusinessProfileComponent
      },
      {
        path: 'edit',
        component: EditBusinessProfileComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class BusinessProfileRoutingModule { }
