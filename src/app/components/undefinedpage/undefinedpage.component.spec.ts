import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndefinedpageComponent } from './undefinedpage.component';

describe('UndefinedpageComponent', () => {
  let component: UndefinedpageComponent;
  let fixture: ComponentFixture<UndefinedpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndefinedpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UndefinedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
