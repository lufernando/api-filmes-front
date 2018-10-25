import { Component, OnInit } from '@angular/core';
import { FilmesGenericos } from './filmes-genericos';
import { EventEmitterService } from '../filmes.emitter';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})

export class ListarFilmesComponent implements OnInit {
  
  filmes: Array<FilmesGenericos>;
  titulo: string;
  

  constructor(private emitter: EventEmitterService, private service: FilmesService) { }

  ngOnInit() {
    this.service.buscaInicial().subscribe(filmesRecebidos => this.filmes = filmesRecebidos);

    this.emitter.get('evento.buscarLista').subscribe(tituloVariavel => {this.titulo = tituloVariavel;
        this.service.buscarTodosBanco(this.titulo).subscribe(listaFilmes => {this.filmes = listaFilmes;
        if(!this.filmes){
          if(confirm('Vai buscar na api parcero?!')){
            this.service.buscarNaApi(this.titulo).subscribe(listaApi => this.filmes = listaApi);
          }
        }
        });

    });
    
  }

}
