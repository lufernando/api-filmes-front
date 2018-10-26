import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmesGenericos } from '../models.ts/filmes-genericos.model';
import { FilmeDetalhado } from '../models.ts/filme-detalhado.model';

const URL_API = 'http://localhost:8080/api/titulo/';
const URL_API_BUSCA = 'http://localhost:8080/api/buscaNaApi/';
const URL_API_BUSCA_iNICIAL = 'http://localhost:8080/api/buscaInicial';
const URL_API_BUSCA_LOCAL = 'http://localhost:8080/api/listaGenerica/';


@Injectable({
  providedIn: 'root'
})

export class FilmesService {

  constructor(private http: HttpClient) {}

  buscarTodosBanco(titulo: string): Observable<FilmesGenericos[]> {
    return this.http.get<FilmesGenericos[]>(URL_API + titulo);
  }

    buscarNaApi(titulo: string): Observable<FilmesGenericos[]> {
    return this.http.get<FilmesGenericos[]>(URL_API_BUSCA + titulo);
  }

    buscaInicial(): Observable<FilmesGenericos[]> {
    return this.http.get<FilmesGenericos[]>(URL_API_BUSCA_iNICIAL);
  }

    buscarPorId(id: string): Observable<FilmeDetalhado>{
      return this.http.get<FilmeDetalhado>(URL_API_BUSCA_LOCAL + id);
    }
}
