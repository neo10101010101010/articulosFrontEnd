import  swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Articulos } from '../articulos';
import { ArticulosService } from '../articulos.service';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.css']
})
export class EditarArticuloComponent implements OnInit{

  id:number;
  lista:string[]= ["Pieza","Kilogramo","Pulgada","Litro"];
  seleccionado: string = '';
  articulos:Articulos = new Articulos();

  constructor(private articulosService:ArticulosService, private router:Router, private route:ActivatedRoute){}

  ngOnInit():void{
    this.seleccionado = this.lista[0];
    this.articulos.medida = this.seleccionado;
    this.id = this.route.snapshot.params['id'];
    this.articulosService.obtenerArticuloPorId(this.id).subscribe(dato => {
      this.articulos = dato;
    },error => console.log(error));

  }

  irAListaArticulos()
  {
    this.router.navigate(['/articulos']);
    swal.fire('Articulo actualizado', `El articulo ${this.articulos.nombre} ha sido actualizado con exito`,`success`);
  }

  onSummit()
  {
    this.articulosService.actualizarArticulo(this.id, this.articulos).subscribe(dato => {
      this.irAListaArticulos();
    },error => console.log(error));
  }
}
