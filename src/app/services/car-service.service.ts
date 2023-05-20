import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carro } from '../models/carro.interface';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  private readonly CAR_SERVICE_URL: string = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  public obtenerTodosLosCarros() {
    return this.http.get<Carro[]>(`${this.CAR_SERVICE_URL}/carro`);
  }
  public crearCarro(carro:Carro){
    return this.http.post<Carro>(`${this.CAR_SERVICE_URL}/carro`,carro);
  }
  public actualizarCarro(id:number, carro:Carro){
    return this.http.put<Carro>(`${this.CAR_SERVICE_URL}/carro/${id}`,carro);
  }
}
