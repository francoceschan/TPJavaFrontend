import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearModificarViajesComponent } from './crear-modificar-viajes.component';

describe('CrearModificarViajesComponent', () => {
  let component: CrearModificarViajesComponent;
  let fixture: ComponentFixture<CrearModificarViajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearModificarViajesComponent]
    });
    fixture = TestBed.createComponent(CrearModificarViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
