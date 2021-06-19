import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url:string = "https://609f10635f32be00171cd34d.mockapi.io/Productos"

  constructor(private _Http:HttpClient) { }

  obtenerProductos():Observable<any>{
    return this._Http.get(this.url)
  }
}
