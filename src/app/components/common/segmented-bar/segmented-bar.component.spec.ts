import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedBarComponent } from './segmented-bar.component';

describe('SegmentedBarComponent', () => {
  let component: SegmentedBarComponent;
  let fixture: ComponentFixture<SegmentedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentedBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
