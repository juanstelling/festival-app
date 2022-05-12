import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedjComponent } from './updatedj.component';

describe('UpdatedjComponent', () => {
  let component: UpdatedjComponent;
  let fixture: ComponentFixture<UpdatedjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
