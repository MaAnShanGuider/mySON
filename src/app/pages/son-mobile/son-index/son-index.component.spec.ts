import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonIndexComponent } from './son-index.component';

describe('SonIndexComponent', () => {
  let component: SonIndexComponent;
  let fixture: ComponentFixture<SonIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
