import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroLibrosSeleccionadosComponent } from './filtro-libros-seleccionados.component';

describe('FiltroLibrosSeleccionadosComponent', () => {
  let component: FiltroLibrosSeleccionadosComponent;
  let fixture: ComponentFixture<FiltroLibrosSeleccionadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroLibrosSeleccionadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroLibrosSeleccionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
