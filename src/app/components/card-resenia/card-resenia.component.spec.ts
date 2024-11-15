import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReseniaComponent } from './card-resenia.component';

describe('CardReseniaComponent', () => {
  let component: CardReseniaComponent;
  let fixture: ComponentFixture<CardReseniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardReseniaComponent]
    });
    fixture = TestBed.createComponent(CardReseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
