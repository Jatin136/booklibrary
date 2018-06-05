import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinstancedetailComponent } from './bookinstancedetail.component';

describe('BookinstancedetailComponent', () => {
  let component: BookinstancedetailComponent;
  let fixture: ComponentFixture<BookinstancedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookinstancedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinstancedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
