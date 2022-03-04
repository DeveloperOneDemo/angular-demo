import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCountryComponent } from './display-country.component';

describe('DisplayCountryComponent', () => {
  let component: DisplayCountryComponent;
  let fixture: ComponentFixture<DisplayCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
