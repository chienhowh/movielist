import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LaptopFileterComponent } from './laptop-fileter.component';

describe('LaptopFileterComponent', () => {
  let component: LaptopFileterComponent;
  let fixture: ComponentFixture<LaptopFileterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopFileterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopFileterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
