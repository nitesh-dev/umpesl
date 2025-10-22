import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectStatus } from './add-project-status';

describe('AddProjectStatus', () => {
  let component: AddProjectStatus;
  let fixture: ComponentFixture<AddProjectStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProjectStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjectStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
