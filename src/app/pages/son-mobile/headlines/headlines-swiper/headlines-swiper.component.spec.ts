import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlinesSwiperComponent } from './headlines-swiper.component';

describe('HeadlinesSwiperComponent', () => {
  let component: HeadlinesSwiperComponent;
  let fixture: ComponentFixture<HeadlinesSwiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlinesSwiperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlinesSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
