import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurListComponent } from './our-list.component';

describe('OurListComponent', () => {
  let component: OurListComponent;
  let fixture: ComponentFixture<OurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
