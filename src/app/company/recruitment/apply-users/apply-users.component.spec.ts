import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyUsersComponent } from './apply-users.component';

describe('ApplyUsersComponent', () => {
  let component: ApplyUsersComponent;
  let fixture: ComponentFixture<ApplyUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
