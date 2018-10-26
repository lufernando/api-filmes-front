import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterService } from './filmes.emitter';
import { FilmesGenericos } from './models.ts/filmes-genericos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  filmes: Array<FilmesGenericos>;
  public titulo: string;
  
  constructor(private router: Router, private emitter: EventEmitterService){ }

  ngOnInit(){
  }

  pesquisar(): void {
    console.log('primeiro evento');
    this.emitter.get('evento.buscarLista').emit(this.titulo);
  }

}
