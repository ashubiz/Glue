import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusinessProfileComponent } from './business-profile.component';
import { BusinessProfileRoutingModule } from './business-profile-routing.module';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        BusinessProfileRoutingModule
    ],
    declarations: [
        BusinessProfileComponent
    ],
    exports: [
    ],
    providers: [],
})

export class BusinessProfileModule {

}
