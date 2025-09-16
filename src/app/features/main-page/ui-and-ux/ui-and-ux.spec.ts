import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAndUx } from './ui-and-ux';

describe('UiAndUx', () => {
  let component: UiAndUx;
  let fixture: ComponentFixture<UiAndUx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAndUx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAndUx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
