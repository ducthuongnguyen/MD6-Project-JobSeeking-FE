import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPostedJobComponent } from './dashboard-posted-job.component';

describe('DashboardPostedJobComponent', () => {
  let component: DashboardPostedJobComponent;
  let fixture: ComponentFixture<DashboardPostedJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPostedJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPostedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
