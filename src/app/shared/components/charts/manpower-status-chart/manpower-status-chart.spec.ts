import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManpowerStatusChart } from './manpower-status-chart';

describe('ManpowerStatusChart', () => {
  let component: ManpowerStatusChart;
  let fixture: ComponentFixture<ManpowerStatusChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManpowerStatusChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManpowerStatusChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
