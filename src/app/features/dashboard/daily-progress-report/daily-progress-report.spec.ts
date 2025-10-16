import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProgressReport } from './daily-progress-report';

describe('DailyProgressReport', () => {
  let component: DailyProgressReport;
  let fixture: ComponentFixture<DailyProgressReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyProgressReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyProgressReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
