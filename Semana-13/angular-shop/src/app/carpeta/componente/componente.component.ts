import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: []
})
export class ComponenteComponent implements OnInit {

  misProductos:Array<object>

  suscripcionProd:Subscription

  constructor(
    private _sProducto: ProductoService
  ) { }

  getProductos(){
    this.suscripcionProd = this._sProducto.obtenerProductos().subscribe((datos)=>{
      // console.log("datos obtenidos",datos)
      this.misProductos = datos
    })
  }

  ngOnInit(): void {
    this.getProductos()
  }

}
