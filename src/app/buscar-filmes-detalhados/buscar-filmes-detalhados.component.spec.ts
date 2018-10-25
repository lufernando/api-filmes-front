import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFilmesDetalhadosComponent } from './buscar-filmes-detalhados.component';

describe('BuscarFilmesDetalhadosComponent', () => {
  let component: BuscarFilmesDetalhadosComponent;
  let fixture: ComponentFixture<BuscarFilmesDetalhadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarFilmesDetalhadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarFilmesDetalhadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
