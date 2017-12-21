import { makeId } from '../common/utility';
export class Promotions {
    id: string;
    name: string;
    description: string;
    startDate: any;
    endDate: any;
    constructor(obj: any) {
        this.id = obj.id ? obj.id : '';
        this.name = obj.name ? obj.name : '';
        this.description = obj.description ? obj.description : '';
        this.startDate = obj.startDate ? this.changeDateFormat(obj.startDate) : (obj.id ? '' : this.generateDate(false, new Date()));
        this.endDate = obj.endDate ? this.changeDateFormat(obj.endDate) : (obj.id ? '' : this.generateDate(true, new Date()));
    }

    generateDate(isEndDate: boolean, d: Date): any {
        const temp = {
            date: {
                year: d.getFullYear(),
                month: d.getMonth() + 1,
                day: isEndDate ? d.getDate() + 7 : d.getDate()
            }
        };
        return temp;
    }

    changeDateFormat(date: any): any {
        const dataSplit = date.split('-');
        const changedDate = new Date(dataSplit[2], dataSplit[1] - 1, dataSplit[0]);
        return this.generateDate(false, changedDate);
    }
}
