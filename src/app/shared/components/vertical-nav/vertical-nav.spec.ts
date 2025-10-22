import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalNav } from './vertical-nav';

describe('VerticalNav', () => {
  let component: VerticalNav;
  let fixture: ComponentFixture<VerticalNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
