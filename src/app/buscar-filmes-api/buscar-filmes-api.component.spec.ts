import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFilmesApiComponent } from './buscar-filmes-api.component';

describe('BuscarFilmesApiComponent', () => {
  let component: BuscarFilmesApiComponent;
  let fixture: ComponentFixture<BuscarFilmesApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarFilmesApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarFilmesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
