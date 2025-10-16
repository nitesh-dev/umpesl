import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingResources } from './training-resources';

describe('TrainingResources', () => {
  let component: TrainingResources;
  let fixture: ComponentFixture<TrainingResources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingResources]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingResources);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
