import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricBoxComponent } from './metric-box.component';

describe('MetricBoxComponent', () => {
  let component: MetricBoxComponent;
  let fixture: ComponentFixture<MetricBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
