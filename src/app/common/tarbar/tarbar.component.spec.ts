import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarbarComponent } from './tarbar.component';

describe('TarbarComponent', () => {
  let component: TarbarComponent;
  let fixture: ComponentFixture<TarbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
