import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente, Genero, TipoDocumento } from 'src/app/models/cliente.interface';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
  ]
})
export class SignUpComponent {

  public genders: Genero[] = ['Masculino', 'Femenino', 'Otros'];
  public docTypes: TipoDocumento[] = ['CC', 'CE'];
  public passwordRepetido: string = '';

  public clienteARegistrar: Cliente = {
    apellido: '',
    documento: '',
    tipoDocumento: '',
    genero: '',
    licenciaUrl: '',
    nombre: '',
    password: '',
    telefono: '',
    username: '',
    email: ''
  };


  constructor(private clienteService: ClienteService, private router: Router) {

  }

  registrar() {
    if (this.passwordRepetido != this.clienteARegistrar.password) {
      return;
    }
    this.clienteService.registrarCliente(this.clienteARegistrar).subscribe({error: e=>{
      return;
    }})
    this.router.navigate(['/home']);

  }

}


