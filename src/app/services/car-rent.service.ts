import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarroAlquiler } from '../models/carro-alquiler.interface';

@Injectable({
  providedIn: 'root'
})
export class CarRentService {

  private readonly CAR_SERVICE_URL: string = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  public obtenerTodosLosCarrosAlquiler() {
    return this.http.get<CarroAlquiler[]>(`${this.CAR_SERVICE_URL}/carro-alquiler`);
  }

  public obtenerCarroAlquilerPorId(id: number) {
    return this.http.get<CarroAlquiler>(`${this.CAR_SERVICE_URL}/carro-alquiler/${id}`);
  }

  public crearCarroAlquiler(carroAlquiler: CarroAlquiler) {
    return this.http.post<CarroAlquiler>(`${this.CAR_SERVICE_URL}/carro-alquiler`, carroAlquiler);
  }
}
