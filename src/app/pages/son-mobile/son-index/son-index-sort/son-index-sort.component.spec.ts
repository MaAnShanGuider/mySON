import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonIndexSortComponent } from './son-index-sort.component';

describe('SonIndexSortComponent', () => {
  let component: SonIndexSortComponent;
  let fixture: ComponentFixture<SonIndexSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonIndexSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonIndexSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
