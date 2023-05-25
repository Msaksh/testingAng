import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadButterComponent } from './bread-butter.component';

describe('BreadButterComponent', () => {
  let component: BreadButterComponent;
  let fixture: ComponentFixture<BreadButterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadButterComponent]
    });
    fixture = TestBed.createComponent(BreadButterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
