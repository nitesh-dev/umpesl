import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionHotoStatusChart } from './commission-hoto-status-chart';

describe('CommissionHotoStatusChart', () => {
  let component: CommissionHotoStatusChart;
  let fixture: ComponentFixture<CommissionHotoStatusChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommissionHotoStatusChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommissionHotoStatusChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
