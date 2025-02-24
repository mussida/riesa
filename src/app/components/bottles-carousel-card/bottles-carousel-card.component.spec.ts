import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlesCarouselCardComponent } from './bottles-carousel-card.component';

describe('BottlesCarouselCardComponent', () => {
  let component: BottlesCarouselCardComponent;
  let fixture: ComponentFixture<BottlesCarouselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottlesCarouselCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottlesCarouselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
