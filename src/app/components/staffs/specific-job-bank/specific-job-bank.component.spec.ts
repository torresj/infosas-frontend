import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificJobBankComponent } from './specific-job-bank.component';

describe('SpecificJobBankComponent', () => {
  let component: SpecificJobBankComponent;
  let fixture: ComponentFixture<SpecificJobBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificJobBankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificJobBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
