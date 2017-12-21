import { makeId } from '../common/utility';
export class Promotions {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    constructor(obj: any) {
        this.id = obj.id ? obj.id : '';
        this.name = obj.name ? obj.name : '';
        this.description = obj.description ? obj.description : '';
        this.startDate = obj.startDate ? obj.startDate : (obj.id ? '' : this.generateDate(false));
        this.endDate = obj.endDate ? obj.endDate : (obj.id ? '' : this.generateDate(true));
    }

    generateDate(isEndDate: boolean): string {
        let date = '';
        const d = new Date();
        date += (isEndDate ? d.getDate() + 7 : d.getDate()) + '-';
        date += d.getMonth() + '-';
        date += d.getFullYear();
        return date;
    }
}
