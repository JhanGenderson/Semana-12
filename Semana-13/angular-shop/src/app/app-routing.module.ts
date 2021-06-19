import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdComponent } from './components/prod/prod.component';
import { CrearproductoComponent } from './components/crearproducto/crearproducto.component';


const routes: Routes = [
  {path:"",component: ProdComponent},
  {path:"crearproducto", component:CrearproductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
