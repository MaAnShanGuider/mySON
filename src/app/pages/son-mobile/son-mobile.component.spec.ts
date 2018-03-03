import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonMobileComponent } from './son-mobile.component';

describe('SonMobileComponent', () => {
  let component: SonMobileComponent;
  let fixture: ComponentFixture<SonMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
