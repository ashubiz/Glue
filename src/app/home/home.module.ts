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

@NgModule({
    declarations: [
        HomeComponent
    ],
  imports: [
      HomeRoutingModule
  ],
  providers: [
  ]
})
export class HomeModule { }

