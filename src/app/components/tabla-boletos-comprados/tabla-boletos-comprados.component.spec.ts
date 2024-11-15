import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaBoletosCompradosComponent } from './tabla-boletos-comprados.component';

describe('TablaBoletosCompradosComponent', () => {
  let component: TablaBoletosCompradosComponent;
  let fixture: ComponentFixture<TablaBoletosCompradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaBoletosCompradosComponent]
    });
    fixture = TestBed.createComponent(TablaBoletosCompradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
