import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonIndexSwiperComponent } from './son-index-swiper.component';

describe('SonIndexSwiperComponent', () => {
  let component: SonIndexSwiperComponent;
  let fixture: ComponentFixture<SonIndexSwiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonIndexSwiperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonIndexSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
