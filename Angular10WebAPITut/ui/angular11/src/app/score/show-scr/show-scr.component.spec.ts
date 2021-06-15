import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowScrComponent } from './show-scr.component';

describe('ShowScrComponent', () => {
  let component: ShowScrComponent;
  let fixture: ComponentFixture<ShowScrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowScrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowScrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
