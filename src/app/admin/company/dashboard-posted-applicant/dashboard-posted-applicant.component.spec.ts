import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPostedApplicantComponent } from './dashboard-posted-applicant.component';

describe('DashboardPostedApplicantComponent', () => {
  let component: DashboardPostedApplicantComponent;
  let fixture: ComponentFixture<DashboardPostedApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPostedApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPostedApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
