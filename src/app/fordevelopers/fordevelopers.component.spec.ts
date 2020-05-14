import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FordevelopersComponent } from './fordevelopers.component';

describe('FordevelopersComponent', () => {
  let component: FordevelopersComponent;
  let fixture: ComponentFixture<FordevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FordevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FordevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
