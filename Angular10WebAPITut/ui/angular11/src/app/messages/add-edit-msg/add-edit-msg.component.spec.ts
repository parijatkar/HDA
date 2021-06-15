import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMsgComponent } from './add-edit-msg.component';

describe('AddEditMsgComponent', () => {
  let component: AddEditMsgComponent;
  let fixture: ComponentFixture<AddEditMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
