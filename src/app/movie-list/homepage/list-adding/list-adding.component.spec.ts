import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListAddingComponent } from './list-adding.component';

describe('ListAddingComponent', () => {
  let component: ListAddingComponent;
  let fixture: ComponentFixture<ListAddingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
