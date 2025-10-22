import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DprReport } from './dpr-report';

describe('DprReport', () => {
  let component: DprReport;
  let fixture: ComponentFixture<DprReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DprReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DprReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
