import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentBlockComponent } from './recruitment-block.component';

describe('RecruitmentBlockComponent', () => {
  let component: RecruitmentBlockComponent;
  let fixture: ComponentFixture<RecruitmentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
