import { Carro } from "./carro.interface";

export interface CarroAlquiler {
    id?: number;
    placa: string;
    modelo: string;
    color: string;
    status: CarroAlquilerStatus;
    carro: Carro;
}

export enum CarroAlquilerStatus {
    DISPONIBLE, ALQUILADO
}