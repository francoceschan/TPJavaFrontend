import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselReseniasComponent } from './carousel-resenias.component';

describe('CarouselReseniasComponent', () => {
  let component: CarouselReseniasComponent;
  let fixture: ComponentFixture<CarouselReseniasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselReseniasComponent]
    });
    fixture = TestBed.createComponent(CarouselReseniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
