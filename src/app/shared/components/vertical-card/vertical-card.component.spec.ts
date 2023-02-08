import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VerticalCardComponent } from './vertical-card.component';

describe('VerticalCardComponent', () => {
  let component: VerticalCardComponent;
  let fixture: ComponentFixture<VerticalCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
