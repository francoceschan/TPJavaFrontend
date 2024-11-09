import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearModificarCiudadesComponent } from './crear-modificar-ciudades.component';

describe('CrearModificarCiudadesComponent', () => {
  let component: CrearModificarCiudadesComponent;
  let fixture: ComponentFixture<CrearModificarCiudadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearModificarCiudadesComponent]
    });
    fixture = TestBed.createComponent(CrearModificarCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
