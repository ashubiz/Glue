import { Component, OnInit, Input } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'app-date-picker, [app-date-picker]',
    template: `<my-date-picker name="date" [options]="myDatePickerOptions" [formControl]="date"></my-date-picker>`
})
export class DatePickerComponent implements OnInit {

    @Input() date: FormControl;

    public myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd-mm-yyyy',
        showTodayBtn: false
    };

    ngOnInit() {
        if (this.date.value) {
            const dataSplit = this.date.value.split('-');
            const date = new Date(dataSplit[2], dataSplit[1] - 1, dataSplit[0]);
            this.date.patchValue({
                date: {
                    year: date.getFullYear(),
                    month: date.getMonth() + 1,
                    day: date.getDate()
                }
            });
        }
    }

    constructor(private formBuilder: FormBuilder) { }

    clearDate(): void {
        this.date.setValue(null);
    }

}
