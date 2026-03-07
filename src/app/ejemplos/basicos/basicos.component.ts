import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombre: String = 'Luis Forero';
  correo: any = 'luisfoguz1198@gmail.com';
  edad: number = 24;
  numero: number = 142;
  fecha = new Date();
  html: string = `<strong>Texto en negritas</strong>`;
  paises: Array<any>;
  ejemplo:String;

  constructor(){
    this.paises=[
      {
        nombre: "Colombia",
        dominio: ".com"
      },
      {
        nombre: "Chile",
        dominio: ".cl"
      },
      {
        nombre: "Peru",
        dominio: ".pe"
      }
    ];
  }

}
