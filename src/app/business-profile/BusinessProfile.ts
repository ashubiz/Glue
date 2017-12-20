import { makeId } from '../common/utility';
export class BusinessProfile {
    id: string;
    businessName: string;
    businessDescription: string;
    businessPhone: string;
    websiteUrl: string;
    facebookUrl: string;
    twitterUrl: string;
    uploadFile: File;
    businessAddress: string;
    constructor(obj: any) {
        this.id = makeId();
        this.businessName = obj.businessName ? obj.businessName : '';
        this.businessDescription = obj.businessDescription ? obj.businessDescription : '';
        this.businessPhone = obj.businessPhone ? obj.businessPhone : '';
        this.websiteUrl = obj.websiteUrl ? obj.websiteUrl : '';
        this.facebookUrl = obj.facebookUrl ? obj.facebookUrl : '';
        this.twitterUrl = obj.twitterUrl ? obj.twitterUrl : '';
        this.uploadFile = obj.uploadFile ? obj.uploadFile : null;
        this.businessAddress = obj.businessAddress ? obj.businessAddress : '';
    }
}
