import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../user/_services/authentication.service';
import { Observable } from 'rxjs';
declare let $: any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'dashboard', title: 'Payment',  icon: 'ti-panel', class: '' },
    { path: 'business_profile', title: 'Business Profile',  icon: 'ti-user', class: '' },
    { path: 'promotions', title: 'Promotions',  icon: 'ti-view-list-alt', class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    constructor(private authService: AuthService) {
    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }
    logout() {
        this.authService.logout();
    }
}
