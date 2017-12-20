import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MyDatePickerModule,
        ReactiveFormsModule
    ],
    declarations: [
        DatePickerComponent,
        SidebarComponent,
        NavbarComponent,
        FooterComponent
    ],
    exports: [
        DatePickerComponent,
        SidebarComponent,
        NavbarComponent,
        FooterComponent
    ],
    providers: [],
})

export class SharedModule {

}
