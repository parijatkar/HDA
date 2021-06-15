import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRepComponent } from './add-edit-rep.component';

describe('AddEditRepComponent', () => {
  let component: AddEditRepComponent;
  let fixture: ComponentFixture<AddEditRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
