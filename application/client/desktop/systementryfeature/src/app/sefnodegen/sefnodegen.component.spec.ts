import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SefNodeGenComponent } from './SefNodeGen.component';

describe('SefNodeGenComponent', () => {
  let component: SefNodeGenComponent;
  let fixture: ComponentFixture<SefNodeGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SefNodeGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SefNodeGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});