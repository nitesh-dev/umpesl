import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDependency } from './client-dependency';

describe('ClientDependency', () => {
  let component: ClientDependency;
  let fixture: ComponentFixture<ClientDependency>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDependency]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDependency);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
