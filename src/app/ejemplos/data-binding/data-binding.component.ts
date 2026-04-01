import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  disabled:boolean=false;
  color:string="blue";
  text:string="Hola Mundo";
  img:string="java-logo-angular.jpg";
  ancho:number=100;
  alto:number=100;

  cambiar(){
    this.img="yoda.png";
    this.ancho=300;
    this.alto=400;
  }
}

