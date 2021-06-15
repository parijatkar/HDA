import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCondComponent } from './show-cond.component';

describe('ShowCondComponent', () => {
  let component: ShowCondComponent;
  let fixture: ComponentFixture<ShowCondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
