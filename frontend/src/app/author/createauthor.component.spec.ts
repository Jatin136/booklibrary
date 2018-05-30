import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateauthorComponent } from './createauthor.component';

describe('CreateauthorComponent', () => {
  let component: CreateauthorComponent;
  let fixture: ComponentFixture<CreateauthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateauthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
