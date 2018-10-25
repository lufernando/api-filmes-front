import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarFilmesComponent } from './listar-filmes/listar-filmes.component';
import { BuscarFilmesApiComponent } from './buscar-filmes-api/buscar-filmes-api.component';
import { BuscarFilmesDetalhadosComponent } from './buscar-filmes-detalhados/buscar-filmes-detalhados.component';

const routes: Routes = [
  {path: '', component: ListarFilmesComponent},
  {path: 'buscar-filmes-api', component: BuscarFilmesApiComponent},
  {path: 'buscar-filmes-detalhados', component: BuscarFilmesDetalhadosComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule]
})
export class AppRoutingModule { }
