import { Component, OnInit, ElementRef } from '@angular/core';
import { BusinessProfile } from '../BusinessProfile';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-edit-business-profile',
  templateUrl: 'edit-business-profile.component.html',
})
export class EditBusinessProfileComponent implements OnInit {
  businessPofileFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private elRef: ElementRef) { }

  ngOnInit() {
    const businessProfile = new BusinessProfile({});
    this.businessPofileFormGroup = this.fb.group(this.generateBusinessProfileFormGroup(businessProfile));
  }

  generateBusinessProfileFormGroup(element: any) {
    const businessProfile: any = {};
    businessProfile['id'] = element['id'];
    businessProfile['businessName'] = element['businessName'];
    businessProfile['businessDescription'] = element['businessDescription'];
    businessProfile['businessPhone'] = element['businessPhone'];
    businessProfile['websiteUrl'] = element['websiteUrl'];
    businessProfile['facebookUrl'] = element['facebookUrl'];
    businessProfile['twitterUrl'] = element['twitterUrl'];
    businessProfile['uploadFile'] = element['uploadFile'];
    businessProfile['businessAddress'] = element['businessAddress'];
    return businessProfile;
  }

  onSelectDocument(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
       const reader = new FileReader();
        const image = this.elRef.nativeElement.querySelector('.testImage');

        reader.onload = (e) => {
            const src = e.target.result;
            image.src = src;
        };

        reader.readAsDataURL(event.target.files[0]);
    }
  }

}
