import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PaymentInfoComponent } from './payment-info.component';
import { PaymentInfoRoutingModule } from './payment-info-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PaymentInfoRoutingModule
  ],
  declarations: [
    PaymentInfoComponent
  ],
  exports: [
    PaymentInfoComponent
  ],
  providers: []
})
export class PaymentInfoModule { }
