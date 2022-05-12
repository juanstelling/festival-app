import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesetComponent } from './updateset.component';

describe('UpdatesetComponent', () => {
  let component: UpdatesetComponent;
  let fixture: ComponentFixture<UpdatesetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
