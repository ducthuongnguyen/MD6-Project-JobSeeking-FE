import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByUserComponent } from './find-by-user.component';

describe('FindByUserComponent', () => {
  let component: FindByUserComponent;
  let fixture: ComponentFixture<FindByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
