import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlesCarouselComponent } from './bottles-carousel.component';

describe('BottlesCarouselComponent', () => {
  let component: BottlesCarouselComponent;
  let fixture: ComponentFixture<BottlesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottlesCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottlesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
