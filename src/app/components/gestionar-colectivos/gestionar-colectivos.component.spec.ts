import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarColectivosComponent } from './gestionar-colectivos.component';

describe('GestionarColectivosComponent', () => {
  let component: GestionarColectivosComponent;
  let fixture: ComponentFixture<GestionarColectivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionarColectivosComponent]
    });
    fixture = TestBed.createComponent(GestionarColectivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
