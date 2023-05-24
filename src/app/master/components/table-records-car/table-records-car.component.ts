import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/carro.interface';
import { CarServiceService } from 'src/app/services/car-service.service';

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-table-records-car',
  templateUrl: './table-records-car.component.html',
  styles: [
  ]
})
export class TableRecordsCarComponent implements OnInit{
  


  //cars
  cars: Carro[] = [];

  carroACrear: Carro = { marca: "", serie: "", image: "", capacidad: 0 };

  car: Carro = { marca: "", serie: "", image: "", capacidad: 0 };

  visible: boolean = false;

  editVisible: boolean = false;

  deleteVisible: boolean = false;

  capacityOptions: number[] = [];





  //Prime component



  productDialog: boolean = false;

  products: Product[] = [];

  product: Product | null = null;

  selectedProducts: Product[] = [];

  submitted: boolean = false;

  statuses: any[] = [];

  constructor(private carService: CarServiceService) { }

  ngOnInit() {

    this.capacityOptions = [1, 2, 3, 4, 5, 6, 7];
    this.cargarCarros();

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];
  }

  openNew() {

    this.visible = true;
  }

  cargarCarros() {
    this.carService.obtenerTodosLosCarros().subscribe(res => {
      this.cars = res;
      console.log(this.cars);
    })
  }

  crearCarro(carro: Carro) {
    this.carService.crearCarro(carro).subscribe(response => {
      this.cargarCarros();
    });
    this.visible = false;
  }


  editCar(car: Carro) {
    this.car = { ...car };
    console.log(this.car);
    this.editVisible = true;
  }

  makeCarUpdate(id: number, car: Carro) {
    this.carService.actualizarCarro(id, car).subscribe(response => {
      this.cargarCarros();
    });
    this.editVisible = false;
  }

  openDeleteCarro(car: Carro) {
    this.deleteVisible = true;
  }



  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }



  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }


}
