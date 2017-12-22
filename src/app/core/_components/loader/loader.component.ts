import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
@Component({
    moduleId: module.id,
    selector: 'angular-loader',
    template: `<div *ngIf="show" class="slim-loading-bar">
    <div class="slim-loading-bar-progress" [style.width]="progress + '%'" [style.transition]="none"></div>
</div>`,
    styleUrls: ['loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
    isLoading: Observable<boolean>;
    counter: number;
    subscription: Subscription;
    show: boolean;
    progress: number;

    constructor(public loaderService: LoaderService) {
        this.isLoading = loaderService.isLoading();
        this.counter = 0;
        this.show = false;
        this.progress = 50;
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
