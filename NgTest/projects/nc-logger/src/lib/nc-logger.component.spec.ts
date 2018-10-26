import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcLoggerComponent } from './nc-logger.component';

describe('NcLoggerComponent', () => {
  let component: NcLoggerComponent;
  let fixture: ComponentFixture<NcLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
