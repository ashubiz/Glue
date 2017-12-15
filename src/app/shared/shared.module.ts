import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MaterialModule } from '../material.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        NavBarComponent,
        ToolBarComponent
    ],
    exports: [
        NavBarComponent,
        ToolBarComponent
    ],
    providers: [],
})

export class SharedModule {

}