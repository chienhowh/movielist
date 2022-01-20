import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopFileterComponent } from './laptop-fileter.component';

describe('LaptopFileterComponent', () => {
  let component: LaptopFileterComponent;
  let fixture: ComponentFixture<LaptopFileterComponent>;

  beforeEach(async(() => {
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
