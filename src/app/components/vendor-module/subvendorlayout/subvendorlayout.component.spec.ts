import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubvendorlayoutComponent } from './subvendorlayout.component';

describe('SubvendorlayoutComponent', () => {
  let component: SubvendorlayoutComponent;
  let fixture: ComponentFixture<SubvendorlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubvendorlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubvendorlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
