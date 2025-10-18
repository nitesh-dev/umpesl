import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationProgressChart } from './installation-progress-chart';

describe('InstallationProgressChart', () => {
  let component: InstallationProgressChart;
  let fixture: ComponentFixture<InstallationProgressChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallationProgressChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallationProgressChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
