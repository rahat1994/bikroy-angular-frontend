import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchLineComponent } from './punch-line.component';

describe('PunchLineComponent', () => {
  let component: PunchLineComponent;
  let fixture: ComponentFixture<PunchLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunchLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunchLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
