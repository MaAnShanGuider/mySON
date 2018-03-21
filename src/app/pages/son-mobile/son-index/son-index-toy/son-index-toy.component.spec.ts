import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonIndexToyComponent } from './son-index-toy.component';

describe('SonIndexToyComponent', () => {
  let component: SonIndexToyComponent;
  let fixture: ComponentFixture<SonIndexToyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonIndexToyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonIndexToyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
