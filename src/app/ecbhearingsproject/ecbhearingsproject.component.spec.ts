import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcbhearingsprojectComponent } from './ecbhearingsproject.component';

describe('EcbhearingsprojectComponent', () => {
  let component: EcbhearingsprojectComponent;
  let fixture: ComponentFixture<EcbhearingsprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcbhearingsprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcbhearingsprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
