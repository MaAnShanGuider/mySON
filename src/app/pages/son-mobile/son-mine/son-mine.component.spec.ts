import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonMineComponent } from './son-mine.component';

describe('SonMineComponent', () => {
  let component: SonMineComponent;
  let fixture: ComponentFixture<SonMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
