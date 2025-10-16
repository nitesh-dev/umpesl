import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DprKanbanCard } from './dpr-kanban-card';

describe('DprKanbanCard', () => {
  let component: DprKanbanCard;
  let fixture: ComponentFixture<DprKanbanCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DprKanbanCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DprKanbanCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
