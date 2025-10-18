import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOverallProgressChart } from './project-overall-progress-chart';

describe('ProjectOverallProgressChart', () => {
  let component: ProjectOverallProgressChart;
  let fixture: ComponentFixture<ProjectOverallProgressChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectOverallProgressChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectOverallProgressChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
