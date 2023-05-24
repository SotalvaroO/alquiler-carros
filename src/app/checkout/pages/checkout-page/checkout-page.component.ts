import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarroAlquiler, CarroAlquilerStatus } from 'src/app/models/carro-alquiler.interface';
import { CarRentService } from 'src/app/services/car-rent.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styles: [
  ]
})
export class CheckoutPageComponent implements OnInit {

  carroAlquiler: CarroAlquiler = {
    carro: {
      serie: '',
      capacidad: 0,
      image: '',
      marca: ''
    },
    color: '',
    modelo: '',
    placa: '',
    status: CarroAlquilerStatus.DISPONIBLE
  };

  constructor(private route: ActivatedRoute, private carroAlquilerService: CarRentService) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getCarrosAlquiler(id);
    })
  }

  getCarrosAlquiler(id: number) {
    this.carroAlquilerService.obtenerCarroAlquilerPorId(id).subscribe(response => {
      this.carroAlquiler = response
      console.log(this.carroAlquiler);
    });
  }
}
