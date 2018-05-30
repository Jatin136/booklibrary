import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebookinstanceComponent } from './createbookinstance.component';

describe('CreatebookinstanceComponent', () => {
  let component: CreatebookinstanceComponent;
  let fixture: ComponentFixture<CreatebookinstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatebookinstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebookinstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
