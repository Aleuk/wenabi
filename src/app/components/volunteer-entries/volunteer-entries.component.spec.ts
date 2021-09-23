import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerEntriesComponent } from './volunteer-entries.component';

describe('VolunteerEntriesComponent', () => {
  let component: VolunteerEntriesComponent;
  let fixture: ComponentFixture<VolunteerEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
