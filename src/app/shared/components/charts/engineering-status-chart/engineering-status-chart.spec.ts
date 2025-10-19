import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringStatusChart } from './engineering-status-chart';

describe('EngineeringStatusChart', () => {
  let component: EngineeringStatusChart;
  let fixture: ComponentFixture<EngineeringStatusChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineeringStatusChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineeringStatusChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
