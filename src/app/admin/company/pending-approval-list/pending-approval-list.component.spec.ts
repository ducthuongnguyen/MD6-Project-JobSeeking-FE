import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingApprovalListComponent } from './pending-approval-list.component';

describe('PendingApprovalListComponent', () => {
  let component: PendingApprovalListComponent;
  let fixture: ComponentFixture<PendingApprovalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingApprovalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingApprovalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
