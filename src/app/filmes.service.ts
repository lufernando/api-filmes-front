import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmesGenericos } from './listar-filmes/filmes-genericos';

const URL_API = 'http://localhost:8080/api/titulo/';
const URL_APIBUSCA = 'http://localhost:8080/api/api/';
const URL_APIBUSCAiNICIAL = 'http://localhost:8080/api/buscaInicial';


@Injectable({
  providedIn: 'root'
})

export class FilmesService {

  constructor(private http: HttpClient) {}

  buscarTodosBanco(titulo: string): Observable<FilmesGenericos[]>{
  return this.http.get<FilmesGenericos[]>(URL_API + titulo);
  }

  buscarNaApi(titulo: string): Observable<FilmesGenericos[]>{
    console.log(titulo);
    return this.http.get<FilmesGenericos[]>(URL_APIBUSCA + titulo);
  }

  buscaInicial(): Observable<FilmesGenericos[]>{
    return this.http.get<FilmesGenericos[]>(URL_APIBUSCAiNICIAL);
  }
}
