/**
 * Angular Cores
 */
import { NgModule } from '@angular/core';
import '../common/global-import';
/**
 * Module Imports
 */
import { HomeRoutingModule } from './home-routing.module';
/**
 * Import Component
 */
import { HomeComponent } from './home.component';

/**
 * Material Module
 */
import { MaterialModule } from '../material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HomeComponent
    ],
  imports: [
      HomeRoutingModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [
  ]
})
export class HomeModule { }

