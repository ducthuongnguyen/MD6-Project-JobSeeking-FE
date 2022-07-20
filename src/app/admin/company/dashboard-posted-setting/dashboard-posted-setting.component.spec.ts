import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPostedSettingComponent } from './dashboard-posted-setting.component';

describe('DashboardPostedSettingComponent', () => {
  let component: DashboardPostedSettingComponent;
  let fixture: ComponentFixture<DashboardPostedSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPostedSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPostedSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
