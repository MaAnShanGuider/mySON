import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonIndexCommonListComponent } from './son-index-common-list.component';

describe('SonIndexCommonListComponent', () => {
  let component: SonIndexCommonListComponent;
  let fixture: ComponentFixture<SonIndexCommonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonIndexCommonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonIndexCommonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
