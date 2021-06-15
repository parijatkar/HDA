import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditScrComponent } from './add-edit-scr.component';

describe('AddEditScrComponent', () => {
  let component: AddEditScrComponent;
  let fixture: ComponentFixture<AddEditScrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditScrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditScrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
