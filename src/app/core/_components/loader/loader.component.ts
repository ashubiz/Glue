import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
@Component({
    moduleId: module.id,
    selector: 'angular-loader',
    templateUrl: 'loader.component.html',
    styleUrls: ['loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
    isLoading: Observable<boolean>;
    counter: number;
    subscription: Subscription;
    show: boolean;

    constructor(public loaderService: LoaderService) {
        this.isLoading = loaderService.isLoading();
        this.counter = 0;
        this.show = false;
    }

    ngOnInit() {
        this.subscription = this.isLoading.subscribe((state: boolean) => {
            state ? this.counter++ : this.counter--;
            if (this.counter < 0) {
                this.counter = 0;
            }
            if (this.counter === 0) {
                this.show = false;
            } else {
                this.show = true;
            }
        });
    }
    
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
