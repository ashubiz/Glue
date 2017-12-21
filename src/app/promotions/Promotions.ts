import { makeId } from '../common/utility';
export class Promotions {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    constructor(obj: any) {
        this.id = makeId();
        this.name = obj.name ? obj.name : '';
        this.description = obj.description ? obj.description : '';
        this.startDate = obj.startDate ? obj.startDate : '';
        this.endDate = obj.endDate ? obj.endDate : '';
    }
}
