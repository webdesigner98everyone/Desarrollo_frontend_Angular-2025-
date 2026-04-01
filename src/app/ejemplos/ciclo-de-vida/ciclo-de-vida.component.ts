import { Component } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent {
  texto:string="Hola Mundo";
  constructor() { 
    //se ejecuta al inicio de la clase
    console.log('Ejecutando el constructor');
  }
  ngOnInit():void{
    console.log('Ejecutando el OnInit');
  }
  ngDoCheck(){
    //Se ejecuta cuando el componente es afectado por algun cambio
    console.log('Ejecutando el DoCheck');
  }
  ngOnDestroy(){
    //Se ejecuta cuando se cierra el componente
    alert("cierre")
  }
  cambiarTexto(){
    this.texto="Texto Cambiado";
    console.log('Ejecutando el ngDoCheck cambiando el texto');
  }
}
