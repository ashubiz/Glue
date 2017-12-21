import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaymentInfoComponent } from './payment-info.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PaymentInfoComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class PaymentInfoRoutingModule { }
