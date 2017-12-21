import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TruncatePipe } from './pipes/truncatepipe';
import { DateFormatorPipe } from './pipes/date-formatPipe';
import { BsModalModule } from 'ng2-bs3-modal';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MyDatePickerModule,
        ReactiveFormsModule,
        BsModalModule
    ],
    declarations: [
        DatePickerComponent,
        SidebarComponent,
        NavbarComponent,
        FooterComponent,
        TruncatePipe,
        DateFormatorPipe
    ],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        DatePickerComponent,
        SidebarComponent,
        NavbarComponent,
        FooterComponent,
        BsModalModule,
        TruncatePipe,
        ReactiveFormsModule,
        DateFormatorPipe
    ],
    providers: [],
})

export class SharedModule {

}
