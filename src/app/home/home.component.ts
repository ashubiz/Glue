import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Promotions } from './Promotions';
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  businessPofileFormGroup: FormGroup;

  PromotionsFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    const promotions = new Promotions({});
    this.PromotionsFormGroup = this.fb.group(this.generatePromotionsFormGroup(promotions));
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
