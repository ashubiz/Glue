import { Component, OnInit, Input } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'app-date-picker, [app-date-picker]',
    template: `<my-date-picker name="date" [options]="myDatePickerOptions" [formControl]="date"></my-date-picker>`
})
export class DatePickerComponent {

    @Input() date: FormControl;

    public myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd-mm-yyyy',
        showTodayBtn: false
    };

    constructor(private formBuilder: FormBuilder) { }

    clearDate(): void {
        this.date.setValue(null);
    }

}