import { Component, OnInit } from '@angular/core';
import { CarroAlquiler } from 'src/app/models/carro-alquiler.interface';
import { CarRentService } from 'src/app/services/car-rent.service';

@Component({
  selector: 'app-table-records-car-rent',
  templateUrl: './table-records-car-rent.component.html',
  styles: [
  ]
})
export class TableRecordsCarRentComponent implements OnInit {

  public carrosAlquiler: CarroAlquiler[] = [];
  public carroAlquilerACrear: CarroAlquiler|null = null;

  createVisible: boolean = false;
  editVisible: boolean = false;
  deleteVisible: boolean = false;

  constructor(private carroAlquilerService: CarRentService) {
  }
  ngOnInit(): void {
    this.getCarrosAlquiler();
  }

  getCarrosAlquiler() {
    this.carroAlquilerService.obtenerTodosLosCarrosAlquiler().subscribe(response => {
      this.carrosAlquiler = response
      console.log(this.carrosAlquiler);
    });
  }
  getSeverity(status: string) {
    switch (status) {
      case 'DISPONIBLE':
        return 'success';
      case 'ALQUILADO':
        return 'danger';
      default:
        return 'danger';
    }
  }
  openNew() {
    this.createVisible = true;
  }
  crearCarroAlquier(carroAlquiler: CarroAlquiler|null) {

  }
}
