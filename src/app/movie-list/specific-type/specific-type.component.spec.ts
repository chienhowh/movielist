import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificTypeComponent } from './specific-type.component';

describe('SpecificTypeComponent', () => {
  let component: SpecificTypeComponent;
  let fixture: ComponentFixture<SpecificTypeComponent>;

  beforeEach(async(() => {
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
