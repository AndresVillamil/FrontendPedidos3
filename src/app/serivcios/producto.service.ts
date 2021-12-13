import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProducto } from '../modelos/producto.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  token:String ="";
  constructor(private http:HttpClient,
    private servicioSeguridad: SeguridadService) {
      this.token= this.servicioSeguridad.ObtenerToken();
    }

    ObtenerRegistros():Observable<ModeloProducto[]> {
      return this.http.get<ModeloProducto[]>("http://localhost:3000/productos");
    }

    ObtenerRegistrosPorId(id: string):Observable<ModeloProducto> {
      return this.http.get<ModeloProducto>(`http://localhost:3000/productos/${id}`);
    }

    CrearProducto(producto:ModeloProducto):Observable<ModeloProducto> {
      return this.http.post<ModeloProducto>("http://localhost:3000/productos",producto,{
        headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
        })
      })
    }

    EliminarProducto(id: string):Observable<any> {
      return this.http.delete(`http://localhost:3000/productos/${id}`,{
        headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
        })
      })
    }

    EditarProducto(producto:ModeloProducto):Observable<ModeloProducto> {
      return this.http.put<ModeloProducto>(`http://localhost:3000/productos/${producto.id}`,producto,{
        headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
        })
      })
    }
}
