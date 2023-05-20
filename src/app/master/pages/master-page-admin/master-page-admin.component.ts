import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-master-page-admin',
  templateUrl: './master-page-admin.component.html',
  styles: [
  ]
})
export class MasterPageAdminComponent implements OnInit {
  cities: City[] = [];

  selectedCity: City = { name: "" };

  constructor(private carService: CarServiceService) {
  }

  ngOnInit() {
    this.cities = [
      { name: 'Carros' },
      { name: 'Carros Alquiler' },

    ];
    
  }
}
interface City {
  name: string
}
