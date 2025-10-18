import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementStatusChart } from './procurement-status-chart';

describe('ProcurementStatusChart', () => {
  let component: ProcurementStatusChart;
  let fixture: ComponentFixture<ProcurementStatusChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcurementStatusChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementStatusChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
