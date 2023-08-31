import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListarArticulosComponent } from './listar-articulos/listar-articulos.component';
import { RegistrarArticuloComponent } from './registrar-articulo/registrar-articulo.component';
import { EditarArticuloComponent } from './editar-articulo/editar-articulo.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarArticulosComponent,
    RegistrarArticuloComponent,
    EditarArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
