import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearModificarReseniaComponent } from './crear-modificar-resenia.component';

describe('CrearModificarReseniaComponent', () => {
  let component: CrearModificarReseniaComponent;
  let fixture: ComponentFixture<CrearModificarReseniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearModificarReseniaComponent]
    });
    fixture = TestBed.createComponent(CrearModificarReseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
