import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseAndPlanComponent } from './release-and-plan.component';

describe('ReleaseAndPlanComponent', () => {
  let component: ReleaseAndPlanComponent;
  let fixture: ComponentFixture<ReleaseAndPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseAndPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseAndPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
