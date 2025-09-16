import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevAndInt } from './dev-and-int';

describe('DevAndInt', () => {
  let component: DevAndInt;
  let fixture: ComponentFixture<DevAndInt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevAndInt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevAndInt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
