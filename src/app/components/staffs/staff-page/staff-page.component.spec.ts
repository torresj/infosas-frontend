import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPageComponent } from './staff-page.component';

describe('StaffPageComponent', () => {
  let component: StaffPageComponent;
  let fixture: ComponentFixture<StaffPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
