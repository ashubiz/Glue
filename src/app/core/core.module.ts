import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from './_services/http.service';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { ConfigurationService } from './_services/configuration.service';
import { MyErrorHandler } from './_services/exception-handling.service';
export function configurationServiceFactory(configurationService: ConfigurationService): Function {
    return () => { return configurationService.init(); }; // => required, otherwise `this` won't work inside ConfigurationService::init
}
@NgModule({
    providers: [
        ConfigurationService,
        {
            provide: APP_INITIALIZER,
            useFactory: configurationServiceFactory,
            deps: [ConfigurationService],
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpService,
            multi: true
        },
         MyErrorHandler,
        { provide: ErrorHandler, useClass: MyErrorHandler}
    ]
})
export class CoreModule { }