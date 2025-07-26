import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveWinesComponent } from './five-wines.component';

describe('FiveWinesComponent', () => {
  let component: FiveWinesComponent;
  let fixture: ComponentFixture<FiveWinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveWinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
