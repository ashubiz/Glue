/**
 * Angular Cores
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

/**
 * Super Imports
 */
import { CoreModule } from './core/core.module';
import { CanDeactivateGuard } from './common/can-deativate-guard';
import { AppComponent } from './app.component';

import './common/global-import';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

