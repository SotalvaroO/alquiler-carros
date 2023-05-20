import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
  ]
})
export class SignUpComponent {


  public docTypes: DocType[] = [
    {
      name:'CC'
    },
    {
      name:'TI'
    },
    {
      name:'RC'
    }
  ];
  public selectedDocType: DocType = {};

  public genders: Gender[] = [
    {
      name:'Masculino'
    },
    {
      name:'Femenino'
    },
    {
      name:'Helicóptero de combate'
    }
  ];

}

export interface DocType{
  name?:string;
}
export interface Gender{
  name?:string;
}
