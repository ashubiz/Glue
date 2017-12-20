import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-rouitng.module';
import { DashboardComponent } from './dashboard.component';
@NgModule({
    imports: [
        SharedModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ],
    providers: [],
})

export class DashboardModule {

}
