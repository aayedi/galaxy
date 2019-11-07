import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStarComponent } from './create-star.component';

describe('CreateStarComponent', () => {
  let component: CreateStarComponent;
  let fixture: ComponentFixture<CreateStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
