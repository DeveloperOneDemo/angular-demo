import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHttpBookComponent } from './list-http-book.component';

describe('ListHttpBookComponent', () => {
  let component: ListHttpBookComponent;
  let fixture: ComponentFixture<ListHttpBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHttpBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHttpBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
