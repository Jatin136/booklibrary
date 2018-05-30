import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinstanceitemComponent } from './bookinstanceitem.component';

describe('BookinstanceitemComponent', () => {
  let component: BookinstanceitemComponent;
  let fixture: ComponentFixture<BookinstanceitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookinstanceitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinstanceitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
