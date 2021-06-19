import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent implements OnInit {

  nuevoProducto:object ={
    nombre:'',
    descripcion:'',
    stock:0,
    precio:0,
    colores:'#eee',
    fotos:['https://picsum.photos/200']
  }

  constructor() { }

  ngOnInit(): void {
  }

}
