import { Component, OnInit } from '@angular/core';
import { BusinessProfile } from '../BusinessProfile';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-edit-business-profile',
  templateUrl: 'edit-business-profile.component.html',
})
export class EditBusinessProfileComponent implements OnInit {
  businessPofileFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

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

}
