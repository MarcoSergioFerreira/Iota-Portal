import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealingInstructionComponent } from './dealing-instruction.component';

describe('DealingInstructionComponent', () => {
  let component: DealingInstructionComponent;
  let fixture: ComponentFixture<DealingInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealingInstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealingInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
