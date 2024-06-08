import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViajeComponent } from './card-viaje.component';

describe('CardViajeComponent', () => {
  let component: CardViajeComponent;
  let fixture: ComponentFixture<CardViajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardViajeComponent]
    });
    fixture = TestBed.createComponent(CardViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
