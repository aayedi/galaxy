import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsGalaxyComponent } from './js-galaxy.component';

describe('JsGalaxyComponent', () => {
  let component: JsGalaxyComponent;
  let fixture: ComponentFixture<JsGalaxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsGalaxyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsGalaxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
