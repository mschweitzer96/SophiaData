import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidappsprojectComponent } from './androidappsproject.component';

describe('AndroidappsprojectComponent', () => {
  let component: AndroidappsprojectComponent;
  let fixture: ComponentFixture<AndroidappsprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidappsprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidappsprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
