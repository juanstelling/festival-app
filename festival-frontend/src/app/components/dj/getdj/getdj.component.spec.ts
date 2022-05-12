import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdjComponent } from './getdj.component';

describe('GetdjComponent', () => {
  let component: GetdjComponent;
  let fixture: ComponentFixture<GetdjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
