import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlinesTarbarComponent } from './headlines-tarbar.component';

describe('HeadlinesTarbarComponent', () => {
  let component: HeadlinesTarbarComponent;
  let fixture: ComponentFixture<HeadlinesTarbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlinesTarbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlinesTarbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
