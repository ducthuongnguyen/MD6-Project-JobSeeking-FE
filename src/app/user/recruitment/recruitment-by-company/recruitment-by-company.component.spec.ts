import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentByCompanyComponent } from './recruitment-by-company.component';

describe('RecruitmentByCompanyComponent', () => {
  let component: RecruitmentByCompanyComponent;
  let fixture: ComponentFixture<RecruitmentByCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentByCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentByCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
