import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PromotionsRoutingModule } from './promotions-rouitng.module';
import { PromotionsComponent } from './promotions.component';
@NgModule({
    imports: [
        SharedModule,
        PromotionsRoutingModule
    ],
    declarations: [
        PromotionsComponent
    ],
    entryComponents: [
    ],
    exports: [
        PromotionsComponent
    ],
    providers: [],
})

export class PromotionsModule {

}
