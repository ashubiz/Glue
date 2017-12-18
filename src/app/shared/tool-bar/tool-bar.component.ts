import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../user/_services/authentication.service';
@Component({
  moduleId: module.id,
  selector: 'app-tool-bar',
  templateUrl: 'tool-bar.component.html',
  styleUrls: ['tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
