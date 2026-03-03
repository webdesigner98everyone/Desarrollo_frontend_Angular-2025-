import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {EjemploComponent} from './ejemplo.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplos/ejemplo3/ejemplo3.component';
import { BasicosComponent } from './ejemplos/basicos/basicos.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    Ejemplo2Component,
    Ejemplo3Component,
    BasicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
