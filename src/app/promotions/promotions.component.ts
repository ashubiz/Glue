import { Component, OnInit } from '@angular/core';
import { DynamicService } from '../dynamic/dynamic.service';
import { PromotionComponent } from '../dynamic/promotion-modal/promotion-modal.component';
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html'
})
export class PromotionsComponent implements OnInit {
    public tableData1: TableData;
    constructor(private dynamicService: DynamicService) {

    }

    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
    }

    showPromotion() {
        this.dynamicService.show({
            component: PromotionComponent,
            input: {}
        });
    }
}
