import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedjComponent } from './createdj.component';

describe('CreatedjComponent', () => {
  let component: CreatedjComponent;
  let fixture: ComponentFixture<CreatedjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
