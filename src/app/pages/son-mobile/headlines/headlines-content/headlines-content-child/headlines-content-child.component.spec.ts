import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlinesContentChildComponent } from './headlines-content-child.component';

describe('HeadlinesContentChildComponent', () => {
  let component: HeadlinesContentChildComponent;
  let fixture: ComponentFixture<HeadlinesContentChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlinesContentChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlinesContentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
