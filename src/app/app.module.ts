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
import { AppRoutingModule } from './app-routing.module';

/**
 * Material Module
 */
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import './common/global-import';
import { UserModule } from './user/user.module';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    UserModule,
    MaterialModule,
    SharedModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfkqGyN4YNFJ9Cq2ec1BZEWMU1vRSUaAw'
    })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

