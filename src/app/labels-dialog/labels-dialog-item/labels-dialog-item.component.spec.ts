import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsDialogItemComponent } from './labels-dialog-item.component';

describe('LabelsDialogItemComponent', () => {
  let component: LabelsDialogItemComponent;
  let fixture: ComponentFixture<LabelsDialogItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelsDialogItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelsDialogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
