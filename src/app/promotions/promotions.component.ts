import { Component, OnInit } from '@angular/core';
import { DynamicService } from '../dynamic/dynamic.service';
import { PromotionComponent } from '../dynamic/promotion-modal/promotion-modal.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Promotions } from './Promotions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare interface TableData {
    headerRow: string[];
    dataRows: Array<Promotions>;
}

@Component({
    selector: 'app-promotions',
    templateUrl: './promotions.component.html'
})
export class PromotionsComponent implements OnInit {
    public tableData1: TableData;
    PromotionsFormGroup: FormGroup;
    constructor(private dynamicService: DynamicService, private fb: FormBuilder, private http: HttpClient) {
        this.tableData1 = {
            headerRow: ['ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                new Promotions({
                    id: '1',
                    name: 'Dakota Rice',
                    description: 'Niger',
                    startDate: '21-12-2017',
                    endDate: '22-12-2017'
                }),
                new Promotions({
                    id: '2',
                    name: 'Minerva Hooper',
                    description: 'Curaçao',
                    startDate: '11-11-2017',
                    endDate: '31-12-2017'
                }),
                new Promotions({
                    id: '3',
                    name: 'Sage Rodriguez',
                    description: 'Netherlands',
                    startDate: '05-06-2017',
                    endDate: '15-01-2017'
                }),
                new Promotions({
                    id: '4',
                    name: 'Philip Chaney',
                    description: 'Korea, South',
                    startDate: '19-04-2015',
                    endDate: '14-05-2016'
                }),
                new Promotions({
                    id: '5',
                    name: 'Doris Greene',
                    description: 'Malawi',
                    startDate: '26-05-2004',
                    endDate: '28-02-2019'
                }),
                new Promotions({
                    id: '6',
                    name: 'Mason Porter',
                    description: 'Chile',
                    startDate: '18-08-2015',
                    endDate: '24-62-2020'
                }),
            ]
        };
    }

    ngOnInit() { }

    showPromotion(promotion?: Promotions) {
        // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res: any) => {
        //     console.log(res);
        // })

        this.PromotionsFormGroup = this.fb.group(this.generatePromotionsFormGroup(promotion ? promotion : new Promotions({})));
        this.dynamicService.show({
            component: PromotionComponent,
            input: {
                data: {
                    promotion: this.PromotionsFormGroup
                }
            }
        });
    }

    generatePromotionsFormGroup(element: any) {
        const promotions: any = {};
        promotions['id'] = [element['id'], Validators.required];
        promotions['name'] = [element['name'], Validators.required];
        promotions['description'] = [element['description'], Validators.required];
        promotions['startDate'] = [element['startDate'], Validators.required];
        promotions['endDate'] = [element['endDate'], Validators.required];
        return promotions;
    }
}
