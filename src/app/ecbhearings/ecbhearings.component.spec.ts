import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcbhearingsComponent } from './ecbhearings.component';

describe('EcbhearingsComponent', () => {
  let component: EcbhearingsComponent;
  let fixture: ComponentFixture<EcbhearingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcbhearingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcbhearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
