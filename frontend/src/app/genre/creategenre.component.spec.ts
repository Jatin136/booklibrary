import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreategenreComponent } from './creategenre.component';

describe('CreategenreComponent', () => {
  let component: CreategenreComponent;
  let fixture: ComponentFixture<CreategenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreategenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreategenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
