import { Component, OnInit, Input } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-date-picker',
    templateUrl: './date-picker.component.html'
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
