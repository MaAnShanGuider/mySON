import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlinesContentComponent } from './headlines-content.component';

describe('HeadlinesContentComponent', () => {
  let component: HeadlinesContentComponent;
  let fixture: ComponentFixture<HeadlinesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlinesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlinesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
