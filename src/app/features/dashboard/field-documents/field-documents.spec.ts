import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDocuments } from './field-documents';

describe('FieldDocuments', () => {
  let component: FieldDocuments;
  let fixture: ComponentFixture<FieldDocuments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldDocuments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldDocuments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
