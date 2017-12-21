import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BusinessProfileRoutingModule } from './business-profile-routing.module';
import { BusinessProfileComponent } from './business-profile.component';
import { EditBusinessProfileComponent } from './edit-business-profile/edit-business-profile.component';
@NgModule({
    imports: [
        SharedModule,
        BusinessProfileRoutingModule
    ],
    declarations: [
        BusinessProfileComponent,
        EditBusinessProfileComponent
    ],
    exports: [
    ],
    providers: [],
})

export class BusinessProfileModule {

}
