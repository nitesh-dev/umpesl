import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMasterSheet } from './project-master-sheet';

describe('ProjectMasterSheet', () => {
  let component: ProjectMasterSheet;
  let fixture: ComponentFixture<ProjectMasterSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectMasterSheet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectMasterSheet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
