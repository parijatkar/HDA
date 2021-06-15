import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProcComponent } from './add-edit-proc.component';

describe('AddEditProcComponent', () => {
  let component: AddEditProcComponent;
  let fixture: ComponentFixture<AddEditProcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
