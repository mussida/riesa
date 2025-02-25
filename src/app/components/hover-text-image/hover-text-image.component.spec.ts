import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverTextImageComponent } from './hover-text-image.component';

describe('HoverTextImageComponent', () => {
  let component: HoverTextImageComponent;
  let fixture: ComponentFixture<HoverTextImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverTextImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverTextImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
