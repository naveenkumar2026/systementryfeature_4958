import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystementryfeatureComponent } from './systementryfeature.component';

describe('SystementryfeatureComponent', () => {
  let component: SystementryfeatureComponent;
  let fixture: ComponentFixture<SystementryfeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystementryfeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystementryfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});