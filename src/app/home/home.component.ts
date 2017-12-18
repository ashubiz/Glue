import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BusinessProfile } from './BusinessProfile';
import { Promotions } from './Promotions';
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  businessPofileFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    const businessProfile = new BusinessProfile({});
    this.businessPofileFormGroup = this.fb.group(this.generateBusinessProfileFormGroup(businessProfile));

    const promotions = new Promotions({});
    this.businessPofileFormGroup = this.fb.group(this.generateBusinessProfileFormGroup(promotions));
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

    generatePromotionsFormGroup(element: any) {
    const promotions: any = {};
    promotions['id'] = element['id'];
    promotions['name'] = element['name'];
    promotions['description'] = element['description'];
    promotions['startDate'] = element['startDate'];
    promotions['endDate'] = element['endDate'];
    return promotions;
  }

  onFileInput(event) {

  }
}
