import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCentre } from './account-centre';

describe('AccountCentre', () => {
  let component: AccountCentre;
  let fixture: ComponentFixture<AccountCentre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountCentre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountCentre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
