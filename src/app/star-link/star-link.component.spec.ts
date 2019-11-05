import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarLinkComponent } from './star-link.component';

describe('StarLinkComponent', () => {
  let component: StarLinkComponent;
  let fixture: ComponentFixture<StarLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
