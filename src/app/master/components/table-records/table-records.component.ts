import { Component, Input, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/carro.interface';
import { CarServiceService } from 'src/app/services/car-service.service';



@Component({
  selector: 'app-table-records',
  templateUrl: './table-records.component.html',
  styles: [
  ]
})
export class TableRecordsComponent implements OnInit {

  @Input('source')
  source: any[] = [];


  createVisible: boolean = false;
  entityType:string ="";

  ngOnInit(): void {
    console.log(this.source)
    this.entityType =this.source[0].__typeName
  }

  //test

  getKeys(obj: any): string[] {
    if (obj != null) {
      return Object.keys(obj);
    } else {
      return [];
    }
  }

  openCreate() {
    this.createVisible = true;
  }

}
