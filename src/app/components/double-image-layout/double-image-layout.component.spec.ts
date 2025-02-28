import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleImageLayoutComponent } from './double-image-layout.component';

describe('DoubleImageLayoutComponent', () => {
  let component: DoubleImageLayoutComponent;
  let fixture: ComponentFixture<DoubleImageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubleImageLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleImageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
