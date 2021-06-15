import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCondComponent } from './add-edit-cond.component';

describe('AddEditCondComponent', () => {
  let component: AddEditCondComponent;
  let fixture: ComponentFixture<AddEditCondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
