import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecruitmentDetailComponent } from './user-recruitment-detail.component';

describe('UserRecruitmentDetailComponent', () => {
  let component: UserRecruitmentDetailComponent;
  let fixture: ComponentFixture<UserRecruitmentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRecruitmentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecruitmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
