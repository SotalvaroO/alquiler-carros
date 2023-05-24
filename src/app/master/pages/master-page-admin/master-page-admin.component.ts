import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/models/carro.interface';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-master-page-admin',
  templateUrl: './master-page-admin.component.html',
  styles: [
  ]
})
export class MasterPageAdminComponent implements OnInit {

  public cars: Carro[] = [{ marca: "", serie: "", image: "", capacidad: 0}];

  tables: Tables[] = [];

  selectedTable: Tables = { name: "" };

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.tables = [
      { name: 'Carros' },
      { name: 'Carros Alquiler' },
    ];

  }

  onCarSelectionChange(event: any) {
    if (this.selectedTable === this.tables.find(x => x.name === "Carros Alquiler")) {
      console.log("aqui")
      this.router.navigate(['/admin/crear-carros-alquiler']);
      return;
    }
    if (this.selectedTable === this.tables.find(x => x.name === "Carros")) {
      this.router.navigate(['/admin/crear-carros']);
      return;
    }
    
  }
}
interface Tables {
  name: string
}
