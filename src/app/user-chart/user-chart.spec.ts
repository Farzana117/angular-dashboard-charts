import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChart } from './user-chart';

describe('UserChart', () => {
  let component: UserChart;
  let fixture: ComponentFixture<UserChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
