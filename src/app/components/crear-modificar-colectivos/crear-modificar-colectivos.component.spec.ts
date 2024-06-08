import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearModificarColectivosComponent } from './crear-modificar-colectivos.component';

describe('CrearModificarColectivosComponent', () => {
  let component: CrearModificarColectivosComponent;
  let fixture: ComponentFixture<CrearModificarColectivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearModificarColectivosComponent]
    });
    fixture = TestBed.createComponent(CrearModificarColectivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
