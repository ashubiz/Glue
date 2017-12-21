import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { BsModalComponent } from 'ng2-bs3-modal';
@Component({
    templateUrl: 'promotion-modal.component.html'
})

export class PromotionComponent implements OnInit, OnDestroy, AfterViewInit {

    inputs: any;
    destroy: any;
    @ViewChild('modal') modal: BsModalComponent;
    constructor(
        // private injector: Injector
    ) {
    }
    ngOnInit() {
        // this.inputs = this.injector.get('data');
        // this.destroy = this.injector.get('destroy');
    }
    ngAfterViewInit() {
        this.modal.open();
    }
    ngOnDestroy() {
    }
    dismissModal() {
        this.inputs.callback(false);
        this.destroy();
    }
    closeModal() {
        this.inputs.callback(true);
        this.destroy();
    }
}
