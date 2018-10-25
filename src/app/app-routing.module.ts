import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarFilmesComponent } from './listar-filmes/listar-filmes.component';

const routes: Routes = [
  {path: `listar-filmes`, component: ListarFilmesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
