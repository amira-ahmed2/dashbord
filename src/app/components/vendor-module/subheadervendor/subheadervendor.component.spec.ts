import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheadervendorComponent } from './subheadervendor.component';

describe('SubheadervendorComponent', () => {
  let component: SubheadervendorComponent;
  let fixture: ComponentFixture<SubheadervendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubheadervendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubheadervendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
