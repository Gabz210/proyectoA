import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HySComponent } from './hy-s.component';

describe('HySComponent', () => {
  let component: HySComponent;
  let fixture: ComponentFixture<HySComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HySComponent]
    });
    fixture = TestBed.createComponent(HySComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
