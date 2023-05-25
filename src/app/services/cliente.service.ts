import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.interface';
import { Login } from '../models/login.interface';
import { Token } from '../models/token.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly CAR_SERVICE_URL: string = 'http://localhost:8080/cliente'

  constructor(private http: HttpClient) { }

  registrarCliente(cliente: Cliente) {
    return this.http.post<Cliente>(`${this.CAR_SERVICE_URL}/sign-up`, cliente);
  }

  login(login: Login) {
    return this.http.post<Token>(`${this.CAR_SERVICE_URL}/login`, login);
  }
}
