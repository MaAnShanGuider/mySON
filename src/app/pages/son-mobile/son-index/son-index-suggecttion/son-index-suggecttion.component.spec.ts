import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonIndexSuggecttionComponent } from './son-index-suggecttion.component';

describe('SonIndexSuggecttionComponent', () => {
  let component: SonIndexSuggecttionComponent;
  let fixture: ComponentFixture<SonIndexSuggecttionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonIndexSuggecttionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonIndexSuggecttionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
