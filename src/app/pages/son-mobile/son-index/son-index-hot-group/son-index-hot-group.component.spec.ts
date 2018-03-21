import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonIndexHotGroupComponent } from './son-index-hot-group.component';

describe('SonIndexHotGroupComponent', () => {
  let component: SonIndexHotGroupComponent;
  let fixture: ComponentFixture<SonIndexHotGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonIndexHotGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonIndexHotGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
