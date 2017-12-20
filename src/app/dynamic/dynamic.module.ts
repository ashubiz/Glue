import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DynamicComponent } from './dynamic.component';
import { DynamicService } from './dynamic.service';
@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        DynamicComponent
    ],
    entryComponents: [
        
    ],
    exports: [
        DynamicComponent
    ],
    providers: [
        DynamicService
    ]
})
export class DynamicModule {}
