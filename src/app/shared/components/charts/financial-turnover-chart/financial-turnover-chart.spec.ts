import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialTurnoverChart } from './financial-turnover-chart';

describe('FinancialTurnoverChart', () => {
  let component: FinancialTurnoverChart;
  let fixture: ComponentFixture<FinancialTurnoverChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialTurnoverChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialTurnoverChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
