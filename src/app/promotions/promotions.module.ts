import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PromotionsRoutingModule } from './promotions-rouitng.module';
import { PromotionsComponent } from './promotions.component';
import { PromotionComponent } from './promotion-modal/promotion-modal.component';
@NgModule({
    imports: [
        SharedModule,
        PromotionsRoutingModule
    ],
    declarations: [
        PromotionsComponent,
        PromotionComponent
    ],
    entryComponents: [
        PromotionComponent
    ],
    exports: [
        PromotionsComponent
    ],
    providers: [],
})

export class PromotionsModule {

}
