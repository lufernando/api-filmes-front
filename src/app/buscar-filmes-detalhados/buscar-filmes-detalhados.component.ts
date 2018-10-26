import { Component, OnInit } from '@angular/core';
import { FilmesGenericos } from '../models.ts/filmes-genericos.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmesService } from '../service.ts/filmes.service';

@Component({
  selector: 'app-buscar-filmes-detalhados',
  templateUrl: './buscar-filmes-detalhados.component.html',
  styleUrls: ['./buscar-filmes-detalhados.component.css']
})
export class BuscarFilmesDetalhadosComponent implements OnInit {

  filmesGenericos: FilmesGenericos;
  id: string;

  constructor(private route: ActivatedRoute,
    private service: FilmesService) { }

  ngOnInit() {
    this.filmesGenericos = new FilmesGenericos();
    this.id = this.route.snapshot.paramMap.get('id');
    this.getFilmesGenericos();
    };

    getFilmesGenericos(): void{
      this.service.buscarPorId(this.id).subscribe(filmeDetalhado => {
        this.filmesGenericos = filmeDetalhado;
        console.log(this.filmesGenericos);
      })
    }
  }
