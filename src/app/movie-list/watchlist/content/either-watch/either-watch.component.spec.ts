import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EitherWatchComponent } from './either-watch.component';

describe('EitherWatchComponent', () => {
  let component: EitherWatchComponent;
  let fixture: ComponentFixture<EitherWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EitherWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EitherWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
