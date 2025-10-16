import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DprHistory } from './dpr-history';

describe('DprHistory', () => {
  let component: DprHistory;
  let fixture: ComponentFixture<DprHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DprHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DprHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
