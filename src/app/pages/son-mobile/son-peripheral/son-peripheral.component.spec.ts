import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonPeripheralComponent } from './son-peripheral.component';

describe('SonPeripheralComponent', () => {
  let component: SonPeripheralComponent;
  let fixture: ComponentFixture<SonPeripheralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonPeripheralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonPeripheralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
