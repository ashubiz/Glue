import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-business-profile',
  templateUrl: 'business-profile.component.html'
})
export class BusinessProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  edit() {
    this.router.navigate(['edit']);
  }

}
