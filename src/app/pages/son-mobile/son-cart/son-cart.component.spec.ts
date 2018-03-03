import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonCartComponent } from './son-cart.component';

describe('SonCartComponent', () => {
  let component: SonCartComponent;
  let fixture: ComponentFixture<SonCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
