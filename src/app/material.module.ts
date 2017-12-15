import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSliderModule,
    MatIconModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatTableModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatSliderModule,
        MatMenuModule,
        MatIconModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatToolbarModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatSliderModule,
        MatMenuModule,
        MatIconModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatToolbarModule
    ]
})
export class MaterialModule  { }
