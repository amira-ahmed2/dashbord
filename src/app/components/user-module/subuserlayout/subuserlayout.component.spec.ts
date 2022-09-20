import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubuserlayoutComponent } from './subuserlayout.component';

describe('SubuserlayoutComponent', () => {
  let component: SubuserlayoutComponent;
  let fixture: ComponentFixture<SubuserlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubuserlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubuserlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
