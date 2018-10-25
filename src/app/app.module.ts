import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarFilmesComponent } from './listar-filmes/listar-filmes.component';
import { BuscarFilmesApiComponent } from './buscar-filmes-api/buscar-filmes-api.component';
import { BuscarFilmesDetalhadosComponent } from './buscar-filmes-detalhados/buscar-filmes-detalhados.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarFilmesComponent,
    BuscarFilmesApiComponent,
    BuscarFilmesDetalhadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
