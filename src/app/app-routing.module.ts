import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarArticulosComponent } from './listar-articulos/listar-articulos.component';
import { RegistrarArticuloComponent } from './registrar-articulo/registrar-articulo.component';
import { EditarArticuloComponent } from './editar-articulo/editar-articulo.component';

const routes: Routes = [
  {path: 'articulos',component:ListarArticulosComponent},
  {path: '', redirectTo:'articulos',pathMatch:'full'},
  {path: 'registrar-articulo', component:RegistrarArticuloComponent},
  {path: 'editar-articulo/:id', component:EditarArticuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
