import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, Injector } from '@angular/core';
import { BsModalComponent } from 'ng2-bs3-modal';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
    templateUrl: 'promotion-modal.component.html'
})

export class PromotionComponent implements OnInit, OnDestroy, AfterViewInit {

    inputs: any;
    destroy: any;
    promotionsFormGroup: FormGroup;
    @ViewChild('modal') modal: BsModalComponent;
    constructor(
        private injector: Injector
    ) {
    }
    ngOnInit() {
        this.inputs = this.injector.get('data');
        this.destroy = this.injector.get('destroy');
        this.promotionsFormGroup = this.inputs.promotion;
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
