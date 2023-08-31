import { Component } from '@angular/core';
import { Articulos } from '../articulos';
import { ArticulosService } from '../articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-articulo',
  templateUrl: './registrar-articulo.component.html',
  styleUrls: ['./registrar-articulo.component.css']
})
export class RegistrarArticuloComponent {
  lista:string[]= ["Pieza","Kilogramo","Pulgada","Litro"];
  seleccionado: string = '';
  articulos:Articulos = new Articulos();
  constructor(private articulosService:ArticulosService, private router:Router ){}
  ngOnInit():void{
    this.seleccionado = this.lista[0];
  }

  guardarArticulo()
  {
    this.articulos.medida = this.seleccionado;
    this.articulosService.registrarArticulo(this.articulos).subscribe(dato => {
      console.log(dato);
      this.listaDeArticulos();
    },error =>console.error(error));
  }

  listaDeArticulos()
  {
    this.router.navigate(['/articulos']);
  }

  onSummit()
  {
    this.guardarArticulo();
  }
}