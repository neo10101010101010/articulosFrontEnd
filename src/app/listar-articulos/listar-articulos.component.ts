import { Component } from '@angular/core';
import { Articulos } from '../articulos';
import { ArticulosService } from '../articulos.service';
import { Router } from '@angular/router';
import  swal from 'sweetalert2';



@Component({
  selector: 'app-listar-articulos',
  templateUrl: './listar-articulos.component.html',
  styleUrls: ['./listar-articulos.component.css']
})
export class ListarArticulosComponent {
  articulos: Articulos[];

  constructor(private articulosService:ArticulosService, private router:Router){

  }

  ngOnInit():void{
    this.obtenerArticulos();
  }

  private obtenerArticulos(){
    this.articulosService.obtenerListaDeArticulos().subscribe(dato =>
      {this.articulos = dato;})
  }

  editarArticulo(id:number)
  {
    this.router.navigate(['editar-articulo',id])
  }

  
  eliminarArticulo(id:number){
    swal.fire({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar articulo',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      showDenyButton: true,
      showCancelButton: true
    }).then((result) => {
      if(result.value){
        this.articulosService.eliminarArticulo(id).subscribe(dato => {
          console.log(dato);
          this.obtenerArticulos();
          swal.fire(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  } 
 
}
