import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroAlquiler } from 'src/app/models/carro-alquiler.interface';
import { CarRentService } from 'src/app/services/car-rent.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styles: [
  ]
})
export class CarListComponent implements OnInit {

  public carrosAlquiler: CarroAlquiler[] = [];

  constructor(private carroAlquilerService: CarRentService, private router: Router) {
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
  enviarACheckout(carroAlquiler: CarroAlquiler) {

    console.log(carroAlquiler.id)
    this.router.navigate(['/checkout', carroAlquiler.id])
  }

}
