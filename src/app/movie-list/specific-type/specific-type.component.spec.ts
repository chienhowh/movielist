import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpecificTypeComponent } from './specific-type.component';

describe('SpecificTypeComponent', () => {
  let component: SpecificTypeComponent;
  let fixture: ComponentFixture<SpecificTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
