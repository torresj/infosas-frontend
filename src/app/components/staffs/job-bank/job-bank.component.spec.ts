import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBankComponent } from './job-bank.component';

describe('JobBankComponent', () => {
  let component: JobBankComponent;
  let fixture: ComponentFixture<JobBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobBankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
