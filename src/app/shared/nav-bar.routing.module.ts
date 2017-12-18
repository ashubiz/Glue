import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BusinessProfileComponent } from '../business_profile/business_profile.component';
import { PaymentInfoComponent } from '../payment_info/payment_info.component';
import { PromotionsComponent } from '../promotions/promotions.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                children: [
                    {
                        path: '',
                        redirectTo: 'payment_info',
                        pathMatch: 'full'
                    },
                    {
                        path: 'payment_info',
                        component: PaymentInfoComponent,
                    },
                    {
                        path: 'business_profile',
                        component: BusinessProfileComponent
                    },
                    {
                        path: 'promotions',
                        component: PromotionsComponent
                    },
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class EditReviewProfileRoutingModule { }
