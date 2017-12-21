/**
 * Angular Cores
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
/**
 * Super Imports
 */
import { CoreModule } from './core/core.module';
import { CanDeactivateGuard } from './common/can-deativate-guard';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { DynamicModule } from './dynamic/dynamic.module';
import './common/global-import';
import { UserModule } from './user/user.module';
import { AgmCoreModule } from '@agm/core';
import { BusinessProfileModule } from './business-profile/business-profile.module';
import { PaymentInfoModule } from './payment-info/payment-info.module';
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
    SharedModule,
    AppRoutingModule,
    BusinessProfileModule,
    PaymentInfoModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfkqGyN4YNFJ9Cq2ec1BZEWMU1vRSUaAw'
    }),
    DynamicModule,
    HttpClientModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

