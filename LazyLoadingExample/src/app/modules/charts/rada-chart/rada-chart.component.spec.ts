import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadaChartComponent } from './rada-chart.component';

describe('RadaChartComponent', () => {
  let component: RadaChartComponent;
  let fixture: ComponentFixture<RadaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadaChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
