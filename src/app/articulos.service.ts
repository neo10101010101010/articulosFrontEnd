import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulos } from './articulos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArticulosService {

  constructor(private httpClient : HttpClient) { }

  private baseURL = "http://localhost:8090/api/articulos"
    //obtiene los empleados
    obtenerListaDeArticulos():Observable<Articulos[]>{
      return this.httpClient.get<Articulos[]>(`${this.baseURL}`);
    }

    registrarArticulo(articulo:Articulos):Observable<Object>{
      return this.httpClient.post(`${this.baseURL}`,articulo);
    }

    actualizarArticulo(id:number,articulo:Articulos):Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`, articulo);
    }

    eliminarArticulo(id:number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }

    obtenerArticuloPorId(id:number): Observable<Articulos>
    {
      return this.httpClient.get<Articulos>(`${this.baseURL}/${id}`);
    }
}
