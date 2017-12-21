import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DynamicComponent } from './dynamic.component';
import { DynamicService } from './dynamic.service';
import { PromotionComponent } from './promotion-modal/promotion-modal.component';
@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        DynamicComponent,
        PromotionComponent
    ],
    entryComponents: [
        PromotionComponent
    ],
    exports: [
        DynamicComponent
    ],
    providers: [
        DynamicService
    ]
})
export class DynamicModule {}
