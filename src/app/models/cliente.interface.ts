export interface Cliente {
    id?: number;
    username: string;
    password: string;
    telefono: string;
    email: string
    tipoDocumento: TipoDocumento | any
    documento: string;
    nombre: string;
    apellido: string;
    genero: Genero | any;
    licenciaUrl: string;
}

export type TipoDocumento = 'CC' | 'CE';
export type Genero = 'Masculino' | 'Femenino' | 'Otros';