import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateFormator'
})
export class DateFormatorPipe implements PipeTransform {
    transform(value: any): string {
        if (value) {
            return value.date.day + '-' + value.date.month + '-' + value.date.year;
        }
        return '';
    }
}
