import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorViajesComponent } from './buscador-viajes.component';

describe('BuscadorViajesComponent', () => {
  let component: BuscadorViajesComponent;
  let fixture: ComponentFixture<BuscadorViajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscadorViajesComponent]
    });
    fixture = TestBed.createComponent(BuscadorViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
